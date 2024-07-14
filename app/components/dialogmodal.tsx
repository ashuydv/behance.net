import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';


type Props = {
    isOpen: boolean;
    onClose: () => void;
    type: 'blog' | 'video' | 'image';
}

const DialogModal: React.FC<Props> = ({ isOpen, onClose, type }) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log({ type, title, content, file });

        setTitle('');
        setContent('');
        setFile(null);
        onClose();
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {type === "blog" ? "Create a Blog Post" :
                            type === 'image' ? "Upload an image" : "Upload a video"}
                    </DialogTitle>
                    <DialogDescription>
                        Fill in the details below to {type === 'blog' ? 'create your blog post' : `upload your ${type}`}.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <Label htmlFor="title"></Label>
                        <Input
                            id='title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    {type === 'blog' && (
                        <div>
                            <Label htmlFor="content">Content</Label>
                            <Textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    {(type === 'image' || type === 'video')
                        && (
                            <div>
                                <Label htmlFor='file'>Upload {type}</Label>
                                <Input
                                    id="file"
                                    type="file"
                                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                                    accept={type === 'image' ? 'image/*' : 'video/*'}
                                    required
                                />
                            </div>
                        )}
                    <Button type="submit">Submit</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default DialogModal