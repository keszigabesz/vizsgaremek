const personService = jest.mock('./labtest-card.service');

let mockData;

personService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p.id === id) ) 
);
personService.findAll = jest.fn( () => Promise.resolve(
    mockData.find( p => p.id === 1) ) 
);

personService.__setMockData = data => mockData = data;

module.exports = personService;
