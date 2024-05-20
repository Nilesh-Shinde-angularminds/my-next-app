"use client"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button"

import { CircleX, EllipsisVertical, Plus, Search } from "lucide-react"
import { useEffect, useState } from "react"
import Dialog from './Dialog'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"


export default function TableDemo() {
    const [data, setData] = useState<any>([
        {
            employeeId: "AM1001",
            name: "Rutuparn",
            department: "Management",
            branch: "India"
        },
        {
            employeeId: "AM1002",
            name: "Akshay",
            department: "Human Resource",
            branch: "USA"
        },
        {
            employeeId: "AM3003",
            name: "Nilesh",
            department: "Development",
            branch: "UAE"
        },
        {
            employeeId: "AM5004",
            name: "Shrikant",
            department: "Management",
            branch: "India"
        },
        {
            employeeId: "AM2005",
            name: "Prathamesh",
            department: "Development",
            branch: "Remote"
        },
        {
            employeeId: "AM5006",
            name: "Pushkraj",
            department: "Management",
            branch: "India"
        },
        {
            employeeId: "AM2007",
            name: "Sagar",
            department: "Human Resource",
            branch: "Remote"
        },
    ])
    const [openDialog, setOpenDialog] = useState(false)
    const [addEmp, setAddEmp] = useState({
        employeeId: "",
        name: '',
        department: "",
        branch: '',
    })
    const [currentPage, setCurrentPage] = useState(0)
    const [totalItemsPerPage, stTotalItemsPerPage] = useState(6)
    const [totalNoOfPages, setTotalNoOfPages] = useState(0)
    const [filter, setFilter] = useState({ searchStr: "", filter: "" })
    const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState({ open: false, id: "" })
    const addEmployeeFunction = (obj: any) => {
        if (obj.employeeId) {
            let newData = data.map((item: any, index: any) => item.employeeId == obj.employeeId ? ({ ...item, ...obj }) : item)
            setData(newData)
            setOpenDialog(false)
        }
        else {
            let Id = "AM" + Math.floor(1000 + Math.random() * 9000)
            setData((prev: any) => ([...prev, { ...obj, employeeId: Id }]))
            setOpenDialog(false)
            setCurrentPage(0)
        }
    }

    const DeleteItem = (id: any) => {
        let newData = data.filter((item: any) => item.employeeId != id)
        setData(newData)
        setOpenDeleteConfirmation(prev => ({ ...prev, open: false }))
    }

    const displayItems = (): any[] => {
        let start = currentPage * totalItemsPerPage
        let end = start + totalItemsPerPage
        let filteredArray = data.filter((item: any) => item.name.toLowerCase().includes(filter.searchStr.toLowerCase()) && item.department.toLowerCase().includes(filter.filter.toLowerCase())).slice(start, end)
        return filteredArray
    }
    const getTotalNoOfPages = () => {
        return Math.ceil(data.filter((item: any) => item.name.toLowerCase().includes(filter.searchStr.toLowerCase()) && item.department.toLowerCase().includes(filter.filter.toLowerCase())).length / totalItemsPerPage)
    }
    useEffect(() => {
        setTotalNoOfPages(getTotalNoOfPages())
    }, [totalItemsPerPage, filter])

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (totalNoOfPages - 1 > currentPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (page: any) => {
        setCurrentPage(page);
    };


    return (
        <Card>
            <div className="">
                {/* <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="bg-gray-200 p-4">Column 1 Content</div>
                    <div className="bg-gray-200 p-4">Column 2 Content</div>
                </div> */}
                <div className="flex justify-between ">
                    <div className="">
                        <form className=" flex-1 sm:flex-initial m-5 flex ">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    // onChange={(e) => setSearchString(e.target.value)}
                                    onChange={(e) => setFilter(prev => ({ ...prev, searchStr: e.target.value }))}
                                    placeholder="Search products..."
                                    className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                                />
                            </div>
                            <div className="hidden sm:flex">
                                <Select onValueChange={(value) => setFilter(prev => ({ ...prev, filter: value }))} value={filter.filter}>
                                    <SelectTrigger className=" mx-4" >
                                        <SelectValue placeholder="Filter" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Filter By Department</SelectLabel>
                                            <SelectItem value="Human Resource">Human Resource</SelectItem>
                                            <SelectItem value="Management">Management</SelectItem>
                                            <SelectItem value="Development">Development</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <Button size="sm" type="button" onClick={() => { setFilter({ searchStr: "", filter: "" }); setCurrentPage(0) }}>Clear</Button>
                            </div>
                        </form>
                    </div>
                    <div className="hidden sm:block m-5">
                        <Button className=" " size="sm" onClick={() => setOpenDialog(true)}><Plus className="h-4" />Add</Button>
                    </div>
                    <div className="sm:hidden">
                        <div className="w-6 h-6 m-5 flex items-center justify-center">
                            <DropdownMenu >
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 w-8 p-0 ">
                                        <span className="sr-only">Open menu</span>
                                        <EllipsisVertical className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem onSelect={() => setOpenDialog(true)}>Add  Employee</DropdownMenuItem>
                                    <DropdownMenuItem onSelect={() => setOpenDialog(true)}>
                                        <Select onValueChange={(value) => setFilter(prev => ({ ...prev, filter: value }))} value={filter.filter}>
                                            <SelectTrigger className="" >
                                                <SelectValue placeholder="Filter" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Filter By Department</SelectLabel>
                                                    <SelectItem value="Human Resource">Human Resource</SelectItem>
                                                    <SelectItem value="Management">Management</SelectItem>
                                                    <SelectItem value="Development">Development</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </DropdownMenuItem>

                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>



            </div>
            <Card className="m-3">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-medium">Emp. ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Branch</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead className="text-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {displayItems()?.map((item: any, index: any) => (
                            <TableRow key={item.name + index} >
                                <TableCell className="font-medium">{item.employeeId}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.branch}</TableCell>
                                <TableCell>{item.department}</TableCell>
                                <TableCell className="text-center">
                                    <DropdownMenu >
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <DotsHorizontalIcon className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem onSelect={(e) => { setOpenDialog(true); setAddEmp(prev => ({ ...prev, ...item })) }} >Edit</DropdownMenuItem>
                                            <DropdownMenuItem onSelect={() => setOpenDeleteConfirmation(prev => ({ ...prev, open: true, id: item.employeeId }))} >Delete</DropdownMenuItem>

                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
            <Pagination className="mt-5 p-5 justify-end">
                <PaginationContent>
                    <PaginationItem className="cursor-pointer">
                        <PaginationPrevious onClick={handlePrevious} />
                    </PaginationItem>
                    {Array(totalNoOfPages).fill(0).map((_, index) => (
                        <PaginationItem key={index} className="cursor-pointer">
                            <PaginationLink

                                isActive={index === currentPage}
                                onClick={() => handlePageClick(index)}
                            >
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem className="cursor-pointer" >
                        <PaginationNext onClick={handleNext} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
            <Dialog open={openDialog} addEmployeeFunction={addEmployeeFunction} item={addEmp} setOpenDialog={setOpenDialog} />

            <AlertDialog open={openDeleteConfirmation.open} onOpenChange={() => setOpenDeleteConfirmation(prev => ({ ...prev, open: false }))}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setOpenDeleteConfirmation(prev => ({ ...prev, open: false }))}>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => DeleteItem(openDeleteConfirmation.id)}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>



        </Card >
    )
}
