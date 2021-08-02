mocha.setup("bdd")
const expect = chai.expect

describe('ES6 Classes Assignment', () => {
  describe('Your Sweet \'88 Pontiac Fiero', () => {
    after(() => logSpy.restore())
    it('should have been declared as "mySweetRide"', () => {
      expect(mySweetRide).to.exist
    })
    it('should come from Car class', () => {
      expect(mySweetRide instanceof Car).to.be.true
    })
    it('should have "make" property', () => {
      expect(mySweetRide).to.have.property('make')
    })
    it('should have "make" property of "Pontiac"', () => {
      expect(mySweetRide.make.toLowerCase()).to.eq('pontiac')
    })
    it('should have "model" property', () => {
      expect(mySweetRide).to.have.property('model')
    })
    it('should have "model" property of "Fiero"', () => {
      expect(mySweetRide.model.toLowerCase()).to.eq('fiero')
    })
    it('should have "year" property', () => {
      expect(mySweetRide).to.have.property('year')
    })
    it('should have "year" property of 1988', () => {
      expect(mySweetRide.year).to.eq(1988)
    })
    it('should be a 1988 pontiac fiero', () => {
      expect(mySweetRide.make.toLowerCase()).to.eq('pontiac')
      expect(mySweetRide.model.toLowerCase()).to.eq('fiero')
      expect(mySweetRide.year).to.eq(1988)
    })
    it('should have been honked once before maintenance', () => {
      expect(logSpy.firstCall.args[0].toLowerCase()).to.eq('beep beep!')
    })
    it('should have had a 3 second maintenance and log "maintenance complete" after honking', () => {
      expect(logSpy.secondCall).to.be.null
      clock.tick(3000)
      expect(logSpy.secondCall.args[0].toLowerCase()).to.eq('maintenance complete')
      clock.restore()
    })
  })

  describe('Car Class', () => {
    let car
    let logStub
    before(() => {
      car = new Car('Honda', 'Civic', 1998)
    })
    beforeEach(() => {
      logStub = sinon.stub(console, 'log')
    })
    afterEach(() => sinon.restore())
    it('should create an object that is an instance of the Car class', function () {
      expect(car instanceof Car).to.be.true
    })
    it('should have "make" property', () => {
      expect(car).to.have.property('make')
    })
    it('should have "make" property equal to constructor value', () => {
      expect(car.make.toLowerCase()).to.eq('honda')
    })
    it('should have "model" property', () => {
      expect(car).to.have.property('model')
    })
    it('should have "model" property equal to constructor value', () => {
      expect(car.model.toLowerCase()).to.eq('civic')
    })
    it('should have "year" property', () => {
      expect(car).to.have.property('year')
    })
    it('should have "year" property equal to constructor value', () => {
      expect(car.year).to.eq(1998)
    })
    it('should not have hard-coded properties', () => {
      car2 = new Car('Dodge', 'Charger', 2021)
      expect(car2.make).to.eq('Dodge')
      expect(car2.model).to.eq('Charger')
      expect(car2.year).to.eq(2021)
    })
    it('should have honk method that logs "BEEP BEEP!"', () => {
      car.honk()
      expect(logStub.called).to.be.true
      expect(logStub.firstCall.args[0].toLowerCase()).to.eq('beep beep!')
    })
    it('should have "performMaintenance" method that logs "maintenance complete" after 3 seconds', () => {
      const clock = sinon.useFakeTimers()
      car.performMaintenance()
      expect(logStub.called).to.be.false
      clock.tick(3000)
      expect(logStub.called).to.be.true
      expect(logStub.firstCall.args[0].toLowerCase()).to.eq('maintenance complete')
    })
  })
})

mocha.run()