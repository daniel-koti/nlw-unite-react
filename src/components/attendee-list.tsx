import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react'
import { IconButton } from './icon-button';
import { Table } from './table/table';
import { TableHeader } from './table/table-header';
import { TableCell } from './table/table-cell';
import { TableRow } from './table/table-row';

export function AttendeeList() {
  return (
   <div className='flex flex-col gap-4'>
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 py-1.5 border border-white/10 bg-transparent rounded-lg text-sm w-72 flex items-center gap-3">
          <Search className='size-4 text-emerald-300' />
          <input placeholder="Busque o participante..."  className="flex-1 outline-none bg-transparent h-auto border-0 p-0 ring-0"/>
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
              <TableHeader>Data do checkin</TableHeader>
              <TableHeader style={{ width: 64 }}></TableHeader>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8}).map((_, i) => (
              <TableRow key={i} className='border-b border-white/10 hover:bg-white/10'>
                <TableCell className='py-3 px-4 text-sm text-zinc-300'>
                  <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
                </TableCell>
                <TableCell className='py-3 px-4 text-sm text-zinc-300'>212133</TableCell>
                <TableCell className='py-3 px-4 text-sm text-zinc-300'>
                  <div className='flex flex-col gap-1'>
                    <span className='font-semibold text-white'>Daniel Moniz</span>
                    <span>danielk.moniz@gmail.com</span>
                  </div>
                </TableCell>
                <TableCell className='py-3 px-4 text-sm text-zinc-300'>7 dias atrás</TableCell>
                <TableCell className='py-3 px-4 text-sm text-zinc-300'>3 dias atrás</TableCell>
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
                Mostrando 10 de 228 itens
              </TableCell>
              <td colSpan={3} className='py-3 px-4 text-sm text-zinc-300 text-right'>
                <div className='inline-flex items-center gap-8'>
                  <span>Página 1 de 3</span>

                  <div className='flex gap-1.5'>
                    <IconButton>
                      <ChevronsLeft className='siz-4' />
                    </IconButton>

                    <IconButton>
                      <ChevronLeft className='siz-4' />
                    </IconButton>

                    <IconButton>
                      <ChevronRight className='siz-4' />
                    </IconButton>

                    <IconButton>
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