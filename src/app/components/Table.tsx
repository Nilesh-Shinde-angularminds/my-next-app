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
    CaretSortIcon,
    ChevronDownIcon,
    DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useState } from "react"
import Dialog from './Dialog'

import {
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"








export default function TableDemo() {
    const [data, setData] = useState([
        {
            EmployeeId: "INV001",
            name: "Rutuparn",
            department: "Management",
            paymentMethod: "Credit Card",
        },
        {
            EmployeeId: "INV002",
            name: "Akshay",
            department: "Human resource",
            paymentMethod: "PayPal",
        },
        {
            EmployeeId: "INV003",
            name: "Nilesh",
            department: "Development",
            paymentMethod: "Bank Transfer",
        },
        {
            EmployeeId: "INV004",
            name: "Shrikant",
            department: "Management",
            paymentMethod: "Credit Card",
        },
        {
            EmployeeId: "INV005",
            name: "Prathamesh",
            department: "Development",
            paymentMethod: "PayPal",
        },
        {
            EmployeeId: "INV006",
            name: "Pushkraj",
            department: "Management",
            paymentMethod: "Bank Transfer",
        },
        {
            EmployeeId: "INV007",
            name: "Sagar",
            department: "Human resource",
            paymentMethod: "Credit Card",
        },
    ])

    const HandleClick = () => {



    }

    const DeleteItem = (ind: any) => {
        let newData = data.filter((item, index) => index != ind)
        setData(newData)
    }
    const [openDialog, setOpenDialog] = useState(false)

    return (
        <Card>
            <div className="flex justify-between align-center">
                <form className=" flex-1 sm:flex-initial m-5">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search products..."
                            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                        />
                    </div>
                </form>
                <Button className="m-3 h-8">Add+</Button>
            </div>
            <Card className="m-3">
                <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Emp. Id</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead className="text-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item, index) => (
                            <TableRow key={item.EmployeeId}>
                                <TableCell className="font-medium">{item.EmployeeId}</TableCell>
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
                                            <DropdownMenuItem onSelect={(e) => { e.preventDefault(); setOpenDialog(true) }} >Edit</DropdownMenuItem>
                                            <Dialog open={openDialog} setOpenDialog={setOpenDialog} />
                                            <DropdownMenuItem onClick={() => DeleteItem(index)}>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            {/* <TableCell colSpan={3}>Total</TableCell> */}
                            {/* <TableCell className="text-right">$2,500.00</TableCell> */}
                        </TableRow>
                    </TableFooter>
                </Table>
            </Card>

            <Pagination className="mt-5 p-5 justify-end">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </Card>
    )
}
