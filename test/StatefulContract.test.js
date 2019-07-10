const StatefulContract = artifacts.require('./StatefulContract');
const helper = require('ganache-time-traveler');

contract('StatefulContract', async (accounts) =>  {
    before('deploy StatefulContract', async() => {
        statefulContract = await StatefulContract.new();
    });

    beforeEach(async() => {
        snapShot = await helper.takeSnapshot();
        snapshotId = snapShot['result'];
    });
    afterEach(async() => {
        await helper.revertToSnapShot(snapshotId);
    });

    it("Example of a Call", async() => {
      await statefulContract.setData.call(5)
      let data = await statefulContract.data.call()
      assert.equal(data.toNumber(), 0)
    });

    it("Example of a Transaction", async() => {
      await statefulContract.setData(5)
      let data = await statefulContract.data.call()
      assert.equal(data.toNumber(), 5)
    });

    it("Example of getDataPlus1 using call", async() => {
      await statefulContract.setData(20)
      let data = await statefulContract.getDataPlus1.call()
      assert.equal(data.toNumber(), 21)
    });

    it("Example of getDataPlus1 using transaction", async() => {
      await statefulContract.setData(20)
      let data = await statefulContract.getDataPlus1()
      assert.equal(data.toNumber(), 21)
    });

    it("Example of modifyStateAndReturnNewVal using transaction", async() => {
      let data = await statefulContract.modifyStateAndReturnNewVal.call(14)
      await statefulContract.modifyStateAndReturnNewVal(14)
      let data = await statefulContract.modifyStateAndReturnNewVal.call(14)
      assert.equal(data.toNumber(), 14)
    });
});
