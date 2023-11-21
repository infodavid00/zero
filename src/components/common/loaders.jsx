import './loaders.css'

function Loader({size, col}) {
  let style = {
     width: size,
     height: size,
     borderLeftColor : col ?? 'var(--cl3)',
     borderBottomColor : col ?? 'var(--cl3)',
  }
  return <div className='loader' style={{...style,borderTopColor: 'transparent',
  borderRightColor: 'transparent' }}>
  </div>
}

export default Loader
