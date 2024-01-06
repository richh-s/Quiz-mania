
import React from 'react';
import Link from 'next/link';
const WinnersPage = () => {
  const winners = [
    { id: 1, phone: '+2519xxxxxxx', reward: '5GB internet', avatar: '/assets/avatar.png' },
    { id: 2, phone: '+2519xxxxxxx', reward: '5GB internet', avatar: '/assets/avatar.png' },
    { id: 3, phone: '+2519xxxxxxx', reward: '5GB internet', avatar: '/assets/avatar.png' },
    { id: 4, phone: '+2519xxxxxxx', reward: '5GB internet', avatar: '/assets/avatar.png' },
    { id: 5, phone: '+2519xxxxxxx', reward: '5GB internet', avatar: '/assets/avatar.png' },
    { id: 6, phone: '+2519xxxxxxx', reward: '5GB internet', avatar: '/assets/avatar.png' },
    { id: 7, phone: '+2519xxxxxxx', reward: '5GB internet', avatar: '/assets/avatar.png' },
    { id: 8, phone: '+2519xxxxxxx', reward: '5GB internet', avatar: '/assets/avatar.png' },
    // ... more winners
  ];

  const buttonStyle = {
    background: 'linear-gradient(180deg, #FC830E 0%, #D24E02 100%)',
    boxShadow: '0px 1px 0px 3px #521B03',
    border: '1px solid #FFC10A',
  };

  const getAvatarBackgroundColor = (id) => {
    
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF5733', '#33FF57', '#5733FF', '#FF5733', '#33FF57'];
    return colors[id % colors.length];
  };

  const ellipseStyle = (id) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    width: '35px',
    height: '35px',
    backgroundColor: getAvatarBackgroundColor(id),
    marginRight: '10px',
  });

  return (
    <div className="relative flex flex-col items-center justify-center h-screen p-4"
         style={{
           backgroundImage: `url('/assets/pattern.png'), radial-gradient(94.31% 50% at 50% 50%, #007359 0%, #006C54 35.94%, #024B3B 100%)`,
           backgroundSize: 'cover',
         }}>

      {/* Logo */}
      <img src="/assets/logo.png" alt="Quiz Mania" className="mb-4" />

      <h2 className="text-2xl text-white font-bold mb-4">Winners</h2>
      
      <div className=" bg-opacity-20 rounded-lg p-4 mb-6 w-full max-w-3xl overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="text-white">
              <th className="px-2 py-2">No</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Rewards</th>
            </tr>
          </thead>
          <tbody>
            {winners.map(winner => (
              <tr key={winner.id} className="text-white border-b border-white border-opacity-50">
                <td className="px-4 py-2 text-center">{winner.id}</td>
                <td className="px-4 py-2 text-center flex items-center justify-center">
                  <div style={ellipseStyle(winner.id)}>
                    <img src={winner.avatar} alt={`Avatar ${winner.id}`} className="rounded-full w-8 h-8" />
                  </div>
                  {winner.phone}
                </td>
                <td className="px-4 py-2 text-center">{winner.reward}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <Link href="/" passHref className='w-full text-center '>
          <div style={{...buttonStyle, width:'100%'}} className="py-2 px-4 rounded-lg shadow-md text-white font-bold  mb-4">
              Home
          </div>
       </Link>
    </div>
  );
};

export default WinnersPage;
