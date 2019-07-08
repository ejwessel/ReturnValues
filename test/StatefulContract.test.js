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

    it("Check State after initialization", async() => {
    });

    it("Change State", async() => {
    });
});
