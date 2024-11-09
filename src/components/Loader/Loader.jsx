import { Hourglass, ThreeDots } from "react-loader-spinner";
import css from './Loader.module.css'

const Loader = () => {
  return (
    <div className={CSS.wrap}>
    <div className={css.loader}>
      <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
  />
  {/* <Hourglass
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
  /> */}
</div>   
</div>
  )
}

export default Loader