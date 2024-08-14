import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function UsersPage() {
    return (
        <>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="teacher">Teacher</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
            </Select>
            <h1 className="text-2xl font-bold">Users</h1>
            <Link href={"/"}>
                <Button>Back</Button>
            </Link>
        </>
    )
}