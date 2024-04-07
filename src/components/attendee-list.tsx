import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import { IconButton } from './icon-button';
import { Table } from './table/table';
import { TableHeader } from './table/table-header';
import { TableCell } from './table/table-cell';
import { TableRow } from './table/table-row';
import { ChangeEvent, useEffect, useState } from 'react';

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

interface Attendee {
  id: string
  name: string
  email: string
  createdAt: string
  checkedInAt: string | null
}

export function AttendeeList() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const [total, setTotal] = useState(0)
  const [attendees, setAttendees] = useState<Attendee[]>([])

 
  const totalPages = Math.ceil(total / 10)

  useEffect(() => {
    const url = new URL('http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees')

    url.searchParams.set('pageInde', String(page - 1))

    if (search.length > 0) {
      url.searchParams.set('query', search)
    }

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setAttendees(data.attendees)
        setTotal(data.total)
      })
  }, [page, search])

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
    setPage(1)
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
          <input 
            value={search} 
            onChange={(event) => onSearchInputChanged(event)} 
            placeholder="Busque o participante..."  
            className="flex-1 outline-none bg-transparent border-0 p-0 ring-0 text-sm focus:ring-0"
          />
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
            {attendees.map((attendee) => (
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
                <TableCell className='py-3 px-4 text-sm text-zinc-300'>
                  {attendee.checkedInAt === null 
                  ? <span className='text-zinc-500'>Não fez o check-in</span>
                  : dayjs().to(attendee.checkedInAt)}
                  </TableCell>
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
                Mostrando {attendees.length} de {total} itens
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