import { Button } from "@/shared/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/shared/components/ui/dialog";

export function MdxDialog({
    text,
    children,
}: {
    text: string;
    children: React.ReactNode;
}) {
    return (
        <Dialog>
            <DialogTrigger
                render={
                    <Button
                        variant="empty"
                        size="empty"
                        className="underline underline-offset-8 text-xs"
                    >
                        {text}
                    </Button>
                }
            />
            <DialogContent
                showCloseButton={false}
                className="sm:max-w-lg md:max-w-xl!"
            >
                <div className="typeset typeset-docs -mx-4 no-scrollbar max-h-[70vh] overflow-y-auto px-4 w-full">
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    );
}
