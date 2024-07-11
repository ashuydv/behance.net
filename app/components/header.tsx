import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenuDemo } from "./navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ListItem } from "./listitem";
import { useSession, signOut } from "next-auth/react";

export function Header() {

  const { data: session, status } = useSession();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    // You might want to redirect the user or update the UI here
  };


  return (
    <header className="sticky z-50 bg-white top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-4">
      <nav className="hidden flex-col gap-4 text-lg font-medium md:flex md:flex-row md:items-center md:gap-4 md:text-sm lg:gap-4">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base">
                Explore
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-1 py-4 md:w-[200px] lg:w-[200px]">
                  <div className="px-4 pb-4 border-b">
                    <ListItem href="/docs" title="Search & Explore"></ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="Curated Galleries"
                    ></ListItem>
                  </div>
                  <div className="px-4 pt-4">
                    <ListItem href="/docs" title="Best of Behance"></ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="Graphic Design"
                    ></ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="Illustration"
                    ></ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="Photography"
                    ></ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="UI/UX"
                    ></ListItem>
                  </div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link
          href="#"
          className="text-foreground transition-colors hover:text-foreground text-base"
        >
          Assets
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground text-base"
        >
          Jobs
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors flex items-center hover:text-foreground text-base"
        >
          Behance
          <span className="bg-gradient-to-r from-[#0088fd] text-xs to-[#001faa] rounded text-white px-2 py-1 ml-2">
            pro
          </span>
        </Link>
        {/* <NavigationMenuDemo /> */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base">
                Hire Freelancers
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-1 py-4 md:w-[200px] lg:w-[200px]">
                  <div className="px-4 pb-4 border-b">
                    <ListItem href="/docs" title="Search & Explore"></ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="Curated Galleries"
                    ></ListItem>
                  </div>
                  <div className="px-4 pt-4">
                    <ListItem href="/docs" title="Best of Behance"></ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="Graphic Design"
                    ></ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="Illustration"
                    ></ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="Photography"
                    ></ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="UI/UX"
                    ></ListItem>
                  </div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link href="#" className="hover:text-foreground">
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Orders
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Customers
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Analytics
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>

        {status === "authenticated" ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage src={session.user?.image || undefined} alt={session.user?.name || ""} />
                  <AvatarFallback>{session.user?.name?.[0] || "U"}</AvatarFallback>
                </Avatar>
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <Button>
              <Link href="/login" className="flex items-center gap-2">
                Login
              </Link>
            </Button>
            <Button>
              <Link href="/signup" className="flex items-center gap-2">
                Sign Up
              </Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
