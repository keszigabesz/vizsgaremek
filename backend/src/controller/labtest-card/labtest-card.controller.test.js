const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const personController = require('./labtest-card.controller');
const personService = require('./labtest-card.service');

jest.mock('./labtest-card.service');

describe("labtest controller", () => {
    const mockData = [{
        "id": 1,
        "name": "Fiorenze",
        "price": 12,
        "point": 12,
        "description": "fdyneley0@narod.ru"
    }, {
        "id": 2,
        "name": "Owen",
        "price": 23,
        "point": 23,
        "description": "ojirka1@squidoo.com"
    }, {
        "id": 3,
        "name": "Terra",
        "price": 34,
        "point": 34,
        "description": "thurdman2@reverbnation.com"
    }, {
        "id": 4,
        "name": "Thomasin",
        "price": 45,
        "point": 45,
        "description": "tdekeep3@fc2.com"
    }, {
        "id": 5,
        "name": "Lawrence",
        "price": 56,
        "point": 56,
        "description": "ltearle4@infoseek.co.jp"
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        personService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const PERSON_ID = 1;

        const request = mockRequest({
            params: {
                id: PERSON_ID
            }
        });

        return personController.findOne(request, response, nextFunction)
            .then( () => {
                expect(personService.findOne).toBeCalledWith(PERSON_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === PERSON_ID)
                );                
            })
    });
    test("find all", () => {
        const request = mockRequest();
        const response = mockResponse();

        return personController.findAll(request, response, nextFunction)
            .then( () => {
                expect(Array.isArray(response.body)).toBeTruthy();               
            })
    });
});