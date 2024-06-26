import clsx from 'clsx';
import Image from 'next/image';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center rounded-full border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black',
        {
          'h-[60px] w-[60px]': !size,
          'h-[40px] w-[40px]': size === 'sm'
        }
      )}
    >
      <Image
        src="/images/Logo_Varken.png"
        width={100}
        height={100}
        alt="Logo"
        className={clsx({
          'h-[50px] w-[50px] rounded-full': !size,
          'h-[36px] w-[36px] rounded-full': size === 'sm'
        })}
      />
    </div>
  );
}
