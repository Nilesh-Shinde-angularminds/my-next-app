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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function DialogDemo(props: DialogInterface) {

    const { open, addEmployeeFunction, item, setOpenDialog } = props
    const [data, setData] = useState({
        employeeId: "",
        name: "",
        department: "",
        branch: "",
    })

    useEffect(() => {
        setData(prev => ({ ...prev, ...item }))
    }, [item])

    const submitFunction = () => {
        if (data.name != "" && data.department != "") {
            addEmployeeFunction(data)
            setData({ employeeId: "", name: "", department: "", branch: "" })
        }
    }

    return (
        <Dialog open={open} onOpenChange={() => { setOpenDialog(false); setData({ employeeId: "", name: "", department: "", branch: "" }) }}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{data.employeeId ? "Edit" : "Add"} employee details</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 ">
                    <div className="grid gap-2 my-3">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" value={data.name} onChange={(e) => setData(prev => ({ ...prev, name: e.target.value }))} className="col-span-3" />
                    </div>
                    <div className="grid gap-2 my-3">
                        <div className="flex items-center">
                            <Label htmlFor="department">Branch</Label>

                        </div>
                        <Input id="department" type="text" value={data.branch} onChange={(e) => setData(prev => ({ ...prev, branch: e.target.value }))} className="col-span-3" />
                    </div>
                    <div className="grid gap-2 my-3">
                        <div className="flex items-center">
                            <Label htmlFor="department">Department</Label>

                        </div>

                        <Select onValueChange={(value) => setData(prev => ({ ...prev, department: value }))} value={data.department}>
                            <SelectTrigger >
                                <SelectValue placeholder="Select a Department" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="Human Resource">Human Resource</SelectItem>
                                    <SelectItem value="Management">Management</SelectItem>
                                    <SelectItem value="Development">Development</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={submitFunction}>{data?.employeeId ? "Update" : "Save"}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
