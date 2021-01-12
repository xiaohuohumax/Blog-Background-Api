const MongoClient = require('mongodb').MongoClient;

const {
    database
} = require('../config');

let url = `mongodb://${database.user}:${database.password}@${database.host}`

let client = ""; // 连接池

async function getClient() {
    return new Promise((res, rej) => {
        if (client != '') res(client);
        MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, (err, cli) => {
            if (err) rej(err);
            client = cli;
            res(cli);
        })
    })
}

function inject(name){
    return async function(...params) {
        let client = await getClient();
        return new Promise((res, rej) => {
            client.db(this.dbName).collection(this.colleName)[name](...params, (err, result) => {
                if (err) rej(err);
                res(result);
            })
        });
    }
}

class Collection {

    constructor(dbName, colleName) {
        this.dbName = dbName;
        this.colleName = colleName;
    }
    async find(...params) {
        let client = await getClient();
        return new Promise((res, rej) => {
            client.db(this.dbName).collection(this.colleName).find(...params).toArray((err, docs) => {
                if (err) rej(err);
                res(docs);
            })
        });
    }
    update=inject('update')
    insert=inject('insert')
    remove=inject('remove')
    // async update(...params) {
    //     let client = await getClient();
    //     return new Promise((res, rej) => {
    //         client.db(this.dbName).collection(this.colleName).update(...params, (err, result) => {
    //             if (err) rej(err);
    //             res(result);
    //         })
    //     });
    // }
    // async insert(...params) {
    //     let client = await getClient();
    //     return new Promise((res, rej) => {
    //         client.db(this.dbName).collection(this.colleName).insert(...params, (err, result) => {
    //             if (err) rej(err);
    //             res(result);
    //         })
    //     });
    // }
    // async remove(...params) {
    //     let client = await getClient();
    //     return new Promise((res, rej) => {
    //         client.db(this.dbName).collection(this.colleName).remove(...params, (err, result) => {
    //             if (err) rej(err);
    //             res(result);
    //         })
    //     });
    // }
}


class Link {
    constructor(dbName) {
        this.dbName = dbName;
    }
    collection(colleName) {
        return new Collection(this.dbName, colleName);
    }
}

module.exports = new Link(database.database);