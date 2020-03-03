'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Train_Details', [{
      from: 'salem',
      to: 'chennai',
      TrainName: 'kovai Exp',
      Depart_Time: '17:45:00',
      Arrival_time:'23:00:00',
      date:"2020/02/20",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {  from: 'salem',
    to: 'chennai',
    TrainName: 'kovai Exp',
    Depart_Time: '05:10:00',
    Arrival_time:'10:15:00',
    date:"2020/02/20",
    createdAt: new Date(),
    updatedAt: new Date()
  },{
  from: 'salem',
  to: 'chennai',
  TrainName: 'Nilgiri Exp',
  Depart_Time: '23:25:00',
  Arrival_time:'05:00:00',
  date:"2020/02/20",
  createdAt: new Date(),
  updatedAt: new Date()
},
  {
      TrainName: 'cheran Exp',
      Depart_Time: '1:00:00',
      Arrival_time:'6:45:00',
      from: 'Bangalore',
      to: 'coimbatore',
      date:"2020/02/22",
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      TrainName: 'kovai Exp',
      Depart_Time: '1:00:00',
      Arrival_time:'6:45:00',
      from: 'salem',
      to: 'chennai',
      date:"2020/02/23",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      TrainName: 'Super ac Exp',
      Depart_Time: '2:30:00',
      Arrival_time:'6:45:00',
      from: 'bangalore',
      to: 'chennai',
      date:"2020/02/24",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      TrainName: 'Super ac Exp',
      Depart_Time: '4:30:00',
      Arrival_time:'8:45:00',
      from: 'bangalore',
      to: 'trichy',
      date:"2020/02/24",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      TrainName: 'Super Exp',
      Depart_Time: '2:30:00',
      Arrival_time:'6:45:00',
      from: 'theni',
      to: 'chennai',
      date:"2020/02/23",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      TrainName: 'mayavan Exp',
      Depart_Time: '2:30:00',
      Arrival_time:'6:45:00',
      from: 'theni',
      to: 'coimbatore',
      date:"2020/02/24",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      TrainName: 'theni Exp',
      Depart_Time: '2:30:00',
      Arrival_time:'6:45:00',
      from: 'theni',
      to: 'chennai',
      date:"2020/02/24",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      TrainName: 'mayavan Exp',
      Depart_Time: '3:30:00',
      Arrival_time:'6:45:00',
      from: 'salem',
      to: 'trichy',
      date:"2020/02/24",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      TrainName: 'salem Exp',
      Depart_Time: '3:00:00',
      Arrival_time:'5:05:00',
      from: 'salem',
      to: 'coimbatote',
      date:"2020/02/24",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      TrainName: 'yerkadu Exp',
      Depart_Time: '22:00:00',
      Arrival_time:'4:05:00',
      from: 'theni',
      to: 'trichy',
      date:"2020/02/20",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Train_Details', null, {});
  }
};
