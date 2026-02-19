import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { Avatar, AvatarImage } from '../ui/avatar'

const CompaniesTable = () => {
  return (
    <div>
        <Table>
            <TableCaption>A list of your recent registered companies</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Logo</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className='text-right'>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableCell>
                     <Avatar>
                                <AvatarImage src="https://static.vecteezy.com/system/resources/thumbnails/047/656/219/small/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg" />
                              </Avatar>
                </TableCell>
                <TableCell>Companu Name</TableCell>
                <TableCell>2-18-2026</TableCell>
                <TableCell className="text-right cursor-pointer">
                    <Popover>
                        <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
                        <PopoverContent className="w-32">
                            <div className="flex items-center gap-2 w-fit">
                                <Edit2 className='w-4 cursor-pointer'/>
                                <span>Edit</span>
                            </div>
                        </PopoverContent>
                    </Popover>
                </TableCell>
            </TableBody>
        </Table>
    </div>
  )
}

export default CompaniesTable