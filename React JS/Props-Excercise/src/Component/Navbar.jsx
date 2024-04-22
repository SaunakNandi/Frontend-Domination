/* eslint-disable react/prop-types */
import styles from './style.module.css'

const Navbar = ({data}) => {
  return (
    <>
        <div className="w-full px-10 py-3 flex justify-between items-center">
            <h3 className={`${styles.a} ${styles.b}`}>Orange</h3>
            <div className="flex p-2 px-4 bg-orange-600 text-white rounded-md text-sm gap-3">
                <h3>Favourites</h3>
                <h4>{data.filter(x => x.added).length}</h4>
            </div>
        </div>
    </>
  )
}

export default Navbar