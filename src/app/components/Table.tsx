"use client"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
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

import { Button } from "@/components/ui/button"

import { Search } from "lucide-react"
import { useEffect, useState } from "react"
import Dialog from './Dialog'


export default function TableDemo() {
    const [data, setData] = useState<any>([
        {
            employeeId: "AM1001",
            name: "Rutuparn",
            department: "Management",
        },
        {
            employeeId: "AM1002",
            name: "Akshay",
            department: "Human resource",
        },
        {
            employeeId: "AM3003",
            name: "Nilesh",
            department: "Development",
        },
        {
            employeeId: "AM5004",
            name: "Shrikant",
            department: "Management",
        },
        {
            employeeId: "AM2005",
            name: "Prathamesh",
            department: "Development",
        },
        {
            employeeId: "AM5006",
            name: "Pushkraj",
            department: "Management",
        },
        {
            employeeId: "AM2007",
            name: "Sagar",
            department: "Human resource",
        },
    ])
    const [openDialog, setOpenDialog] = useState(false)
    const [addEmp, setAddEmp] = useState({
        employeeId: "",
        name: '',
        department: ""
    })
    const [searchStr, setSearchString] = useState("")
    const [currentPage, setCurrentPage] = useState(0)
    const [totalItemsPerPage, stTotalItemsPerPage] = useState(6)
    const [totalNoOfPages, setTotalNoOfPages] = useState(0)

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
        }
    }

    const DeleteItem = (id: any) => {
        let newData = data.filter((item: any) => item.employeeId != id)
        setData(newData)
    }

    const displayItems = (): any[] => {
        let start = currentPage * totalItemsPerPage
        let end = start + totalItemsPerPage
        let filteredArray = data.filter((item: any) => item.name.toLowerCase().includes(searchStr.toLowerCase())).slice(start, end)
        return filteredArray
    }
    const getTotalNoOfPages = () => {
        return Math.ceil(data.filter((item: any) => item.name.toLowerCase().includes(searchStr.toLowerCase())).length / totalItemsPerPage)
    }
    useEffect(() => {
        setTotalNoOfPages(getTotalNoOfPages())
    }, [totalItemsPerPage, searchStr])

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
            <div className="flex justify-between align-center">
                <form className=" flex-1 sm:flex-initial m-5">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            onChange={(e) => setSearchString(e.target.value)}
                            placeholder="Search products..."
                            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                        />
                    </div>
                </form>
                <Button className="m-5 h-8" onClick={() => setOpenDialog(true)}>Add+</Button>
            </div>
            <Card className="m-3">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-medium">Emp. ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead className="text-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {displayItems()?.map((item: any, index: any) => (
                            <TableRow key={item.name + index} >
                                <TableCell className="font-medium">{item.employeeId}</TableCell>
                                <TableCell>{item.name}</TableCell>
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
                                            <DropdownMenuItem onClick={() => DeleteItem(item.employeeId)}>Delete</DropdownMenuItem>
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
        </Card>
    )
}
