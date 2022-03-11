
export const Header = () => {
  return (
    <div className='header'>
      <div className='content-header'>

        <div className='logo'>
          <i className="fa-brands fa-earlybirds" />
          <label>Capstone Project</label>
        </div>

        <div className='search'>
          <i className='fa-solid fa-magnifying-glass'/>
          <input 
            type="text"
            placeholder='Search...'
          />     
        </div>

        <div className='shopping-car'>
          <i className="fa-solid fa-cart-shopping"/>
          <label>0</label>
        </div>

      </div>

    </div>
  )
}
