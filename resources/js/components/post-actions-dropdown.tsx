import { useState } from "react";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import { Link, router } from "@inertiajs/react";
import { destroy, edit } from "@/actions/App/Http/Controllers/PostController";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "./ui/alert-dialog";

interface PostActionsDropdownProps {
    postId: number;
    canUpdate: boolean;
    canDelete: boolean;
}

export default function PostActionsDropdown({
    postId,
    canDelete,
    canUpdate,
}: PostActionsDropdownProps) {
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    const handleDelete = () => {
        router.delete(destroy(postId), {
            onSuccess: () => {
                setIsDeleteDialogOpen(false);
            },
        });
    };

    if (!canUpdate && !canDelete) {
        return null;
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger className="cursor-pointer hover:bg-gray-100 flex items-center justify-center px-1.5 py-1 rounded">
                    <MoreVertical size={15} />
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                    {canUpdate && (
                        <DropdownMenuItem
                            render={<Link href={edit(postId)} />}
                            className="flex gap-1 items-center"
                        >
                            <Pencil size={16} />
                            Edit Post
                        </DropdownMenuItem>
                    )}

                    {canDelete && (
                        <DropdownMenuItem
                            onClick={() => setIsDeleteDialogOpen(true)}
                            className="cursor-pointer text-red-600"
                        >
                            <Trash2 size={16} />
                            Delete Post
                        </DropdownMenuItem>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Delete Confirmation Dialog */}
            <AlertDialog
                open={isDeleteDialogOpen}
                onOpenChange={setIsDeleteDialogOpen}
            >
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>

                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your post and remove all associated comments
                            and likes.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>

                        <AlertDialogAction
                            onClick={handleDelete}
                            className="bg-red-600 hover:bg-red-700"
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
