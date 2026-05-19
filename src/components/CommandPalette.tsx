import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandShortcut,
} from "@/components/ui/command";
import {Briefcase, Code2, Download, Github, GraduationCap, Terminal, User} from "lucide-react";

type CommandPaletteProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

const CommandPalette = ({open, onOpenChange}: CommandPaletteProps) => {
    const close = () => onOpenChange(false);

    const jumpTo = (hash: string) => {
        close();
        window.location.hash = hash;
    };

    const openUrl = (url: string) => {
        close();
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const commands = [
        {
            group: "Navigate",
            items: [
                {label: "About", shortcut: "#about", icon: User, action: () => jumpTo("about")},
                {label: "Education", shortcut: "#education", icon: GraduationCap, action: () => jumpTo("education")},
                {label: "Experience", shortcut: "#experience", icon: Briefcase, action: () => jumpTo("experience")},
                {label: "Projects", shortcut: "#projects", icon: Code2, action: () => jumpTo("projects")},
                {label: "Skills", shortcut: "#skills", icon: Terminal, action: () => jumpTo("skills")},
            ],
        },
        {
            group: "Open",
            items: [
                {label: "Resume", shortcut: "PDF", icon: Download, action: () => openUrl("/resume.pdf")},
                {label: "GitHub", shortcut: "vimalyad", icon: Github, action: () => openUrl("https://github.com/vimalyad")},
            ],
        },
    ];

    return (
        <CommandDialog open={open} onOpenChange={onOpenChange}>
            <CommandInput placeholder="Run a portfolio command..."/>
            <CommandList>
                <CommandEmpty>No command found.</CommandEmpty>
                {commands.map((group) => (
                    <CommandGroup key={group.group} heading={group.group}>
                        {group.items.map((item) => {
                            const Icon = item.icon;

                            return (
                                <CommandItem key={item.label} value={item.label} onSelect={item.action}>
                                    <Icon className="mr-3 h-4 w-4 text-primary"/>
                                    <span>{item.label}</span>
                                    <CommandShortcut>{item.shortcut}</CommandShortcut>
                                </CommandItem>
                            );
                        })}
                    </CommandGroup>
                ))}
            </CommandList>
        </CommandDialog>
    );
};

export default CommandPalette;
