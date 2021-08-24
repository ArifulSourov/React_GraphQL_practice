export const GRAPQL_API = "https://b2c-api.flightlocal.com/graphql"

export const GET_DATA = `
{
    getPackages(
      pagination: {
        skip: 4
        limit: 4
      }
    )
    {
      statusCode
      message
      result {
        count
        packages {
          uid
          title
          startingPrice
          thumbnail
          amenities {
            title
            icon
          }
          discount {
            title
            amount
          }
          durationText
          loyaltyPointText
          description
        }
      }
    }
  }`