import type { NextPage } from 'next'
import Button from '../components/website/button/button'

const Home: NextPage = () => {
  return (
    <div>
      <Button title='xin chao' classname='bg-slate-700 text-white rounded-lg p-2 hover:bg-orange-400' />
    </div>
  )
}

export default Home
