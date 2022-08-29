import * as Mock from 'mockjs';

Mock.mock('/getTest1', {
  key1: {
    name1: Mock.Random.integer(20, 100),
    name2: Mock.Random.integer(20, 100),
    name3: Mock.Random.integer(20, 100),
    name4: Mock.Random.integer(20, 100),
    name5: Mock.Random.integer(20, 100),
    name6: Mock.Random.integer(20, 100),
    name7: Mock.Random.integer(20, 100),
    name8: Mock.Random.integer(20, 100),
  },
  key2: {
    name1: Mock.Random.integer(20, 100),
    name2: Mock.Random.integer(20, 100),
    name3: Mock.Random.integer(20, 100),
    name4: Mock.Random.integer(20, 100),
    name5: Mock.Random.integer(20, 100),
    name6: Mock.Random.integer(20, 100),
    name7: Mock.Random.integer(20, 100),
    name8: Mock.Random.integer(20, 100),
  },
});

Mock.mock('/getTest2', {
  type1: {
    day1: Mock.Random.integer(20, 100),
    day2: Mock.Random.integer(20, 100),
    day3: Mock.Random.integer(20, 100),
    day4: Mock.Random.integer(20, 100),
    day5: Mock.Random.integer(20, 100),
    day6: Mock.Random.integer(20, 100),
  },
  type2: {
    day1: Mock.Random.integer(20, 100),
    day2: Mock.Random.integer(20, 100),
    day3: Mock.Random.integer(20, 100),
    day4: Mock.Random.integer(20, 100),
    day5: Mock.Random.integer(20, 100),
    day6: Mock.Random.integer(20, 100),
  },
});

Mock.mock('/getTestPie', {
  type1: {
    day1: Mock.Random.integer(20, 100),
    day2: Mock.Random.integer(20, 100),
    day3: Mock.Random.integer(20, 100),
    day4: Mock.Random.integer(20, 100),
    day5: Mock.Random.integer(20, 100),
    day6: Mock.Random.integer(20, 100),
  },
});
