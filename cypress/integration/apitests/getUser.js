/// <reference types = "Cypress" />

describe('get api user tests', () =>{

    const token="place your access token here";

    it('get users', ()=>{
        cy.request({
            method: 'GET',
            url:'https://gorest.co.in/public/v1/users',
            headers: {
                'authorization': "Bearer"+token
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination.limit).to.eq(20)
        })
    })

    it('get users by id', ()=>{
        cy.request({
            method: 'GET',
            url:'https://gorest.co.in/public/v1/users/32',
            headers: {
                'authorization': "Bearer"+token
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data.name).to.eq("Gopal Mahajan")
        })
    })
})