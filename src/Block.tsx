function Block() {
  let matrix = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ];
  return (
    <div className='flex flex-col gap-16'>
      <h1>Tic Tac Toe</h1>
      <div className='grid grid-rows-3 gap-5 text-3xl justify-center'>
        {matrix.map((item, index) => (
          <div className='flex gap-12' key={index}>
            {item.map((min, index) => (
              <div key={index}>{min}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Block;
