import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'

import { IconButton } from './icon-button';
import { Table } from './table/table';
import { TableHeader } from './table/table-header';
import { TableCell } from './table/table-cell';
import { TableRow } from './table/table-row';
import { ChangeEvent, useState } from 'react';
import { attendees } from '../data/attendees';



dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export function AttendeeList() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(attendees.length / 10)

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  function goToNextPage() {
    setPage(page + 1)
  }

  function goToPreviousPage() {
    setPage(page - 1)
  }

  function goToFirstPage() {
    setPage(1)
  }

  function goToLastPage() {
    setPage(totalPages)
  }

  return (
   <div className='flex flex-col gap-4'>
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 py-1.5 border border-white/10 rounded-lg text-sm w-72 flex items-center gap-3">
          <Search className='size-4 text-emerald-300' />
          <input placeholder="Busque o participante..."  className="flex-1 outline-none bg-transparent border-0 p-0 ring-0 text-sm"/>
        </div>
      </div>
      
      <Table>
          <thead>
            <tr className='border-b border-white/10 '>
              <TableHeader>
                <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
              </TableHeader>
              <TableHeader>Código</TableHeader>
              <TableHeader>Participante</TableHeader>
              <TableHeader>Data de inscrição</TableHeader>
              <TableHeader>Data do checkIn</TableHeader>
              <TableHeader style={{ width: 64 }}></TableHeader>
            </tr>
          </thead>
          <tbody>
            {attendees.slice((page - 1) * 10, page * 10).map((attendee) => (
              <TableRow key={attendee.id} className='border-b border-white/10 hover:bg-white/10'>
                <TableCell className='py-3 px-4 text-sm text-zinc-300'>
                  <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
                </TableCell>
                <TableCell className='py-3 px-4 text-sm text-zinc-300'>{attendee.id}</TableCell>
                <TableCell className='py-3 px-4 text-sm text-zinc-300'>
                  <div className='flex flex-col gap-1'>
                    <span className='font-semibold text-white'>{attendee.name}</span>
                    <span className='lowercase'>{attendee.email}</span>
                  </div>
                </TableCell>
                <TableCell className='py-3 px-4 text-sm text-zinc-300'>{dayjs().to(attendee.createdAt)}</TableCell>
                <TableCell className='py-3 px-4 text-sm text-zinc-300'>{dayjs().to(attendee.checkedInAt)}</TableCell>
                <TableCell className='py-3 px-4 text-sm text-zinc-300'>
                  <IconButton transparent className='bg-black/20 border border-white/10 rounded-md p-1.5'>
                    <MoreHorizontal className='siz-4' />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <TableCell colSpan={3} className='py-3 px-4 text-sm text-zinc-300'>
                Mostrando 10 de {attendees.length} itens
              </TableCell>
              <td colSpan={3} className='py-3 px-4 text-sm text-zinc-300 text-right'>
                <div className='inline-flex items-center gap-8'>
                  <span>Página {page} de {totalPages}</span>

                  <div className='flex gap-1.5'>
                    <IconButton onClick={goToFirstPage} disabled={page === 1}>
                      <ChevronsLeft className='siz-4' />
                    </IconButton>

                    <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                      <ChevronLeft className='siz-4' />
                    </IconButton>

                    <IconButton onClick={goToNextPage} disabled={page === totalPages}>
                      <ChevronRight className='siz-4' />
                    </IconButton>

                    <IconButton onClick={goToLastPage} disabled={page === totalPages}>
                      <ChevronsRight className='siz-4' />
                    </IconButton>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
      </Table>
   </div>
  )
}