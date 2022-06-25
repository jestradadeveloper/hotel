import { PrimaryMenu } from './PrimaryMenu'
import { SecondaryMenu } from './SecondaryMenu'
export const Menu = () => {
  return (
    <div className='flex flex-col w-8/12 flex-nowrap'>
      <SecondaryMenu />
      <PrimaryMenu />
    </div>
  )
}
