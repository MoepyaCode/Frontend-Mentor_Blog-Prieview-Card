import { Container, Main, Wrapper } from './components'

export default function App() {

  return (
    <Main className='bg-yellow-0-0 grid place-items-center'>
      <Container className='bg-white w-[90%] xs:min-h-min xs:max-w-[384px] min-h-[501px] rounded-[20px] border-[1px] border-solid border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,100)] xs:shadow-[16px_16px_0px_0px_rgba(0,0,0,100)] transition-shadow flex flex-col justify-evenly items-start gap-[24px] p-[24px]'>

        <img className='rounded-[10px]' src="images/challenge/illustration-article.svg" alt="illustration-article" />

        <Wrapper className='w-full flex flex-col gap-[12px]'>
          <h2 className='font-figtree w-fit bg-yellow-0-0 flex justify-center items-center rounded-[4px] font-bold px-[12px] py-[4px]'>Learning</h2>

          <p className='font-figtree'>Published 21 Dec 2023</p>

          <h1 className='font-figtree font-bold text-[24px] hover:text-yellow-0-0 cursor-pointer transition-colors w-fit'>
            HTML & CSS foundations
          </h1>

          <p className='text-gray-500-0'>
          These languages are the backbone of every website, defining structure, content, and presentation.
          </p>
        </Wrapper>

        <Wrapper className='flex flex-row flex-nowrap justify-between items-center gap-[12px]'>
          <img className='w-[32px] aspect-square' src="/images/challenge/image-avatar.webp" alt="image-avatar" />
          <span className='font-figtree font-bold'>Greg Hooper</span>
        </Wrapper>
      </Container>
    </Main>
  )
}
