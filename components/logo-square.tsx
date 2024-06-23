import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center rounded-full border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black',
        {
          'h-[60px] w-[60px] rounded-xl': !size,
          'h-[40px] w-[40px] rounded-lg': size === 'sm'
        }
      )}
    >
      <LogoIcon
        className={clsx({
          'h-[60px] w-[60px]': !size,
          'h-[36px] w-[36px]': size === 'sm'
        })}
      />
    </div>
  );
}
