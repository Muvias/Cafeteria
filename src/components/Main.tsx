import Image from 'next/image';
import luzes from '../assets/luzes.jpg';

export function Main() {
    return (
        <div className="items-center justify-between">
            <div className='flex items-center justify-center max-w-full w-full h-[60vh] relative'>
                <div className='w-full h-[60vh] relative'>
                    <Image src={luzes} alt='' className='h-full object-cover' />
                    <div className="absolute inset-0 bg-[#363636] opacity-50"></div>
                </div>

                <div className='absolute flex flex-col justify-center items-center gap-8 max-w-xl text-center text-white sm:p-0 p-6'>
                    <h2 className='sm:text-6xl text-5xl font-semibold'>Desperte o seu paladar</h2>
                    <p className='text-lg font-semibold'>Experimente os nossos cafés especiais e sinta o sabor autêntico da cidade.</p>

                    <button className='sm:w-fit w-full py-2 px-4 text-lg font-semibold rounded-sm bg-[#D2691E] hover:opacity-[0.9] transition-colors'>Visite-nos</button>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-8 w-full px-6 py-16 lg:px-0 sm:py-16 bg-[#F3F4F6]'>
                <p className='lg:w-1/2 text-3xl text-center'>
                    "A Cafeteria é um lugar incrível para tomar um café delicioso. O ambiente é aconchegante e o atendimento é excepcional. Recomendo a todos que estão em São Paulo e procuram um bom café!"
                </p>
                <span className='text-xl'>
                    - Hugo
                </span>
            </div>
        </div>
    )
}