async function getLitcalDate(date) {
    const dynamodb = require('aws-sdk/clients/dynamodb');
    const docClient = new dynamodb.DocumentClient();

    const params = {
        TableName: "liturtical-calendar-2020",
        Key: {
            date: date.toString(),
        }
    };

    const { Item } = await docClient.get(params).promise();

    return (
            {
                date: date,
                litcal_date: Item.litcal_date,
                color: Item.color,
                saint: Item.saint
            }
        );
}

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        litcalDate : async (_, args, __, ___) => await getLitcalDate(args.date),
    },
};

module.exports = resolvers;