import Image from 'next/image';
import luzes from '../assets/luzes.jpg';

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between">
      <div className='flex items-center justify-center max-w-full w-full h-[60vh] relative'>
        <div className='w-full h-[60vh] relative'>
          <Image src={luzes} alt='' className='h-full object-cover' />
          <div className="absolute inset-0 bg-[#363636] opacity-50"></div>
        </div>

        <div className='absolute flex flex-col justify-center items-center gap-8 max-w-xl text-center text-white'>
          <h2 className='text-6xl font-bold'>Desperte o seu paladar</h2>
          <p className='font-semibold'>Experimente os nossos cafés especiais e sinta o sabor autêntico da cidade.</p>

          <button className='w-fit py-2 px-4 rounded-sm bg-[#D2691E] hover:opacity-[0.9] transition-colors'>Visite-nos</button>
        </div>
      </div>
    </main>
  )
}
