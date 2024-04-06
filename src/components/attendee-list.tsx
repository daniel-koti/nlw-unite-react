import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react'

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
      
      <div className='border border-white/10 rounded-lg'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-white/10 '>
              <th style={{ width: 48 }} className='text-left py-3 px-4 text-sm font-semibold'>
                <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
              </th>
              <th className='text-left py-3 px-4 text-sm font-semibold'>Código</th>
              <th className='text-left py-3 px-4 text-sm font-semibold'>Participante</th>
              <th className='text-left py-3 px-4 text-sm font-semibold'>Data de inscrição</th>
              <th className='text-left py-3 px-4 text-sm font-semibold'>Data do checkin</th>
              <th style={{ width: 64 }} className='text-left py-3 px-4 text-sm font-semibold'></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8}).map((_, i) => (
              <tr key={i} className='border-b border-white/10 hover:bg-white/10'>
                <td className='py-3 px-4 text-sm text-zinc-300'>
                  <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
                </td>
                <td className='py-3 px-4 text-sm text-zinc-300'>212133</td>
                <td className='py-3 px-4 text-sm text-zinc-300'>
                  <div className='flex flex-col gap-1'>
                    <span className='font-semibold text-white'>Daniel Moniz</span>
                    <span>danielk.moniz@gmail.com</span>
                  </div>
                </td>
                <td className='py-3 px-4 text-sm text-zinc-300'>7 dias atrás</td>
                <td className='py-3 px-4 text-sm text-zinc-300'>3 dias atrás</td>
                <td className='py-3 px-4 text-sm text-zinc-300'>
                  <button className='bg-black/20 border border-white/10 rounded-md p-1.5'>
                    <MoreHorizontal className='siz-4' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={3} className='py-3 px-4 text-sm text-zinc-300'>
                Mostrando 10 de 228 itens
              </td>
              <td colSpan={3} className='py-3 px-4 text-sm text-zinc-300 text-right'>
                <div className='inline-flex items-center gap-8'>
                  <span>Página 1 de 3</span>

                  <div className='flex gap-1.5'>
                    <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                      <ChevronsLeft className='siz-4' />
                    </button>
                    <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                      <ChevronLeft className='siz-4' />
                    </button>
                    <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                      <ChevronRight className='siz-4' />
                    </button>
                    <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                      <ChevronsRight className='siz-4' />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
   </div>
  )
}