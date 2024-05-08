import { Button } from "@/components/ui/button"
// import { Button } from "@radix-ui/themes";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
// import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"

interface DialogInterface {
    open: boolean;
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
    addEmployeeFunction: (employee: any) => void;
    item: object;
}

export default function DialogDemo(props: DialogInterface) {

    const { open, addEmployeeFunction, item, setOpenDialog } = props
    const [data, setData] = useState({
        employeeId: "",
        name: "",
        department: ""
    })

    useEffect(() => {
        setData(prev => ({ ...prev, ...item }))
    }, [item])

    const submitFunction = () => {
        if (data.name != "" && data.department != "") {
            addEmployeeFunction(data)
            setData({ employeeId: "", name: "", department: "" })
        }
    }

    return (
        <Dialog open={open} onOpenChange={() => setOpenDialog(false)}>
            <DialogContent className="sm:max-w-[425px]" >
                <DialogHeader>
                    <DialogTitle>Edit employee details</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" value={data.name} onChange={(e) => setData(prev => ({ ...prev, name: e.target.value }))} className="col-span-3" />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="department">Department</Label>

                        </div>
                        <Input id="department" type="text" value={data.department} onChange={(e) => setData(prev => ({ ...prev, department: e.target.value }))} className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" variant="secondary" onClick={submitFunction}>{data?.employeeId ? "Update" : "Save"}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
