import { Button } from "@/components/ui/button";
import React from "react";
import RetroGrid from "@/components/magicui/retro-grid";

type Props = {};

const Index = (props: Props) => {
    return (
        <section className="text-black body-font min-h-[50vh]">
            <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
                <RetroGrid />
                <div className="text-center lg:w-6/8 border-black w-full">
                    <h1 className="title-font text-[88px] leading-[90px] mb-4 font-bold text-black">
                        Digital Signage Centre
                        <br />
                        <span className="text-[#0057ff]">Where Innovation</span>
                        <br />
                        <span>Meets Creativity</span>
                    </h1>
                    <p className="text-[22px] mt-[36px] mb-[54px] leading-relaxed">
                        A comprehensive platform to help hirers and creators navigate the creative world from discovering inspiration, to connecting with one another
                    </p>
                    <div className="flex justify-center">
                        <Button className="text-lg btn-black">
                            Upload
                        </Button>
                        <Button className="ml-4 text-lg btn-black">
                            Explore
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;
