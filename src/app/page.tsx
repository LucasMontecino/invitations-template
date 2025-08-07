import Image from 'next/image';
import styles from './page.module.css';
import PrimaryButton from './components/Buttons/PrimaryButton';

export default function Home() {
  return (
    <div className='container min-h-dvh'>
      <div className='flex flex-col justify-center items-center min-h-dvh'>
        <h1 className='text-3xl sm:text-5xl text-center'>
          Bienvenidos a la invitación de Nina
        </h1>
        <p className='font-bellefair text-lg font-light mt-6 text-center sm:text-2xl'>
          La música de fondo es parte de la experiencia
        </p>

        <div className='flex flex-col gap-2 sm:flex-row mt-10'>
          <PrimaryButton label='Ingresar con música' />
          <PrimaryButton label='Ingresar sin música' />
        </div>
      </div>
    </div>
  );
}
