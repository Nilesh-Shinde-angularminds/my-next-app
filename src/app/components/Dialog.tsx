import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"

export default function DialogDemo(props: any) {
    const { open, AddEmployeeFunction, item,setOpenDialog } = props
    const[data, setData]=useState({
        employeeId:"",
        name:"",
        department:""
    })

    useEffect(()=>{
        setData(prev=>({...prev,...item}))
    },[item])

    const submitFunction=()=>{
        if(data.name!="" && data.department!=""){
            AddEmployeeFunction(data)
            setData({employeeId:"", name:"",department:""})
        }
    }
    return (
        <Dialog open={open} onOpenChange={()=>setOpenDialog(false)}>
            <DialogContent className="sm:max-w-[425px]" >
                <DialogHeader>
                    <DialogTitle>Edit employee details</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" type="text" value={data.name} onChange={(e)=>setData(prev=>({...prev,name:e.target.value}))} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="department" className="text-right">
                            Department
                        </Label>
                        <Input id="department" type="text" value={data.department} onChange={(e)=>setData(prev=>({...prev,department:e.target.value}))} className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={submitFunction}>{data?.employeeId ? "Update":"Save"}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
