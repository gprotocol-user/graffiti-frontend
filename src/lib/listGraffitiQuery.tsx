import { gql } from "./generated/codegen/gql";

// export const GET_POSTS_TIMESTAMP = gql(`
//   query GET_POSTS_TIMESTAMPS($from: Int, $until: Int, $offset: Int) {
//     graffiti(
//       limit: 25
//       offset: $offset
//       order_by: { timestamp: desc_nulls_last }
//       where: {
//         _and: [{ timestamp: { _gt: $from } }, { timestamp: { _lt: $until } }]
//       }
//     ) {
//       id
//       address
//       message
//       timestamp
//       locked_funds
//       postIndex
//     }
//   }
// `);

// export const GET_POSTS_TIMESTAMP_AGGREGATE = gql(`
//   query GET_POSTS_TIMESTAMP_AGGREGATE(
//     $limit: Int
//     $from: Int
//     $until: Int
//     $offset: Int
//   ) {
//     graffiti_aggregate(
//       limit: $limit
//       offset: $offset
//       order_by: { locked_funds: desc_nulls_last }
//       where: {
//         _and: [{ timestamp: { _gt: $from } }, { timestamp: { _lt: $until } }]
//       }
//     ) {
//       nodes {
//         id
//         address
//         message
//         timestamp
//         locked_funds
//         postIndex
//       }
//       aggregate {
//         min {
//           locked_funds
//         }
//         max {
//           locked_funds
//           timestamp
//         }
//       }
//     }
//   }
// `);

export const GET_POSTS_TIMESTAMP_AGGREGATE_HELPER = gql(`
  query GET_POSTS_TIMESTAMP_AGGREGATE_HELPER(
    $limit: Int
    $from: Int
    $until: Int
    $offset: Int
    $basura: String
    $wallIndex: bigint = 1
  ) {
    graffiti_aggregate(
      limit: $limit
      offset: $offset
      order_by: { locked_funds: desc_nulls_last }
      where: {
        _and: [
          { wallIndex: { _eq: $wallIndex } },
          { timestamp: { _gt: $from } }, 
          { timestamp: { _lt: $until } }
        ]
      }
    ) {
      nodes {
        id
        address
        message
        timestamp
        locked_funds
        postIndex
      }
      aggregate {
        min {
          locked_funds
        }
        max {
          locked_funds
          timestamp
        }
      }
    }
  }
`);

export const GET_POSTS_BUYSER_FUNDS_AGGREGATE = gql(`
  query GET_POSTS_BUYSER_FUNDS_AGGREGATE(
    $limit: Int
    $from: Int
    $until: Int
    $offset: Int
    $basura: String
    $address: String = "0"
  ) {
    graffiti_aggregate(
      limit: $limit
      offset: $offset
      order_by: { locked_funds: desc_nulls_last }
      where: {
        _and: [
          { address: { _eq: $address } },
          { timestamp: { _gt: $from } }, 
          { timestamp: { _lt: $until } }
        ]
      }
    ) {
      nodes {
        id
        address
        message
        timestamp
        locked_funds
        postIndex
        graffitiToWalls {
          wallName
        }
      }
      aggregate {
        min {
          locked_funds
        }
        max {
          locked_funds
          timestamp
        }
      }
    }
  }
`);

// export const GET_POSTS_TIMESTAMP_AGGREGATE_BYTIME = gql(`
//   query GET_POSTS_TIMESTAMP_AGGREGATE_BYTIME(
//     $limit: Int
//     $from: Int
//     $until: Int
//     $offset: Int
//   ) {
//     graffiti_aggregate(
//       limit: $limit
//       offset: $offset
//       order_by: { timestamp: desc_nulls_last }
//       where: {
//         _and: [{ timestamp: { _gt: $from } }, { timestamp: { _lt: $until } }]
//       }
//     ) {
//       nodes {
//         id
//         address
//         message
//         timestamp
//         locked_funds
//         postIndex
//       }
//       aggregate {
//         min {
//           locked_funds
//         }
//         max {
//           locked_funds
//           timestamp
//         }
//       }
//     }
//   }
// `);

// export const GET_POSTS_TIMESTAMP_AGGREGATE_BYTIME_CACHE = gql(`
//   query GET_POSTS_TIMESTAMP_AGGREGATE_BYTIME_CACHE(
//     $limit: Int
//     $from: Int
//     $until: Int
//     $offset: Int
//     $basura: String = "newest"
//   ) {
//     graffiti_aggregate(
//       limit: $limit
//       offset: $offset
//       order_by: { timestamp: desc_nulls_last }
//       where: {
//         _and: [{ timestamp: { _gt: $from } }, { timestamp: { _lt: $until } }]
//       }
//     ) {
//       nodes {
//           id
//       updated_timestamp
//       updated_at
//       locked_funds
//       cache_id(args: {cache_id: $basura})
//       timestamp
//       address
//       message
//       postIndex
//       }
//       aggregate {
//         min {
//           locked_funds
//         }
//         max {
//           locked_funds
//           timestamp
//         }
//       }
//     }
//   }
// `);

export const GET_POSTS_TIMESTAMP_AGGREGATE_BYTIME_TEST = gql(`
  query GET_POSTS_TIMESTAMP_AGGREGATE_BYTIME_TEST(
    $limit: Int
    $from: Int
    $until: Int
    $offset: Int
    $basura: String
    $wallIndex: bigint = 1
  ) {
    graffiti_aggregate(
      limit: $limit
      offset: $offset
      order_by: { timestamp: desc_nulls_last }
      where: {
        _and: [
          { wallIndex: { _eq: $wallIndex } },
          { timestamp: { _gt: $from } },
          { timestamp: { _lt: $until } }
        ]
      }
    ) {
      nodes {
        id
      updated_timestamp
      updated_at
      locked_funds
      timestamp
      address
      message
      postIndex
      }
      aggregate {
        min {
          locked_funds
        }
        max {
          locked_funds
          timestamp
        }
      }
    }
  }
`);

export const GET_POSTS_BYUSER_TIMESTAMP_AGGREGATE = gql(`
  query GET_POSTS_BYUSER_TIMESTAMP_AGGREGATE(
    $limit: Int
    $from: Int
    $until: Int
    $offset: Int
    $basura: String
    $address: String = "0"
  ) {
    graffiti_aggregate(
      limit: $limit
      offset: $offset
      order_by: { timestamp: desc_nulls_last }
      where: {
        _and: [
          { address: { _eq: $address } },
          { timestamp: { _gt: $from } },
          { timestamp: { _lt: $until } }
        ]
      }
    ) {
      nodes {
        id
        updated_timestamp
        updated_at
        locked_funds
        timestamp
        address
        message
        postIndex
        graffitiToWalls {
          wallName
        }
      }
      aggregate {
        min {
          locked_funds
        }
        max {
          locked_funds
          timestamp
        }
      }
    }
  }
`);

export const SUB_POSTS_UPDATES = gql(`
  subscription SUB_POSTS_UPDATES(
    $_lt: Int = 1000
    $_gt: Int = 1
    $updated_timestamp: Int = 1721740000
    $wallIndex: bigint = 1
  ) {
    graffiti_stream(
      batch_size: 1
      cursor: {
        initial_value: { updated_timestamp: $updated_timestamp }
        ordering: ASC
      }
      where: {_and: {locked_funds: {_gt: $_gt, _lt: $_lt}, wallIndex: {_eq: $wallIndex}}}
    ) {
      id
      updated_timestamp
      updated_at
      locked_funds
      postIndex
    }
  }
`);

export const SUB_POSTS_UPDATES_BYUSER = gql(`
  subscription SUB_POSTS_UPDATES_BYUSER(
    $_lt: Int = 1000
    $_gt: Int = 1
    $updated_timestamp: Int = 1721740000
    $address: String = "0"
  ) {
    graffiti_stream(
      batch_size: 1
      cursor: {
        initial_value: { updated_timestamp: $updated_timestamp }
        ordering: ASC
      }
      where: {_and: {locked_funds: {_gt: $_gt, _lt: $_lt}, address: {_eq: $address}}}
    ) {
      id
      updated_timestamp
      updated_at
      locked_funds
      postIndex
    }
  }
`);

// export const SUB_NEW_POSTS = gql(`
//   subscription SUB_NEW_POSTS($timestamp: Int = 1721740000) {
//     graffiti_stream(
//       batch_size: 1
//       cursor: { initial_value: { timestamp: $timestamp }, ordering: ASC }
//     ) {
//       id
//       updated_timestamp
//       updated_at
//       locked_funds
//       timestamp
//       address
//       message
//       postIndex
//     }
//   }
// `);

export const SUB_POSTS_UPDATES_AND_NEW = gql(`
  subscription SUB_POSTS_UPDATES_AND_NEW($updated_timestamp: Int = 1721740000) {
    graffiti_stream(
      batch_size: 1
      cursor: {
        initial_value: { updated_timestamp: $updated_timestamp }
        ordering: ASC
      }
    ) {
      id
      updated_timestamp
      updated_at
      locked_funds
      timestamp
      address
      message
      postIndex
      wallIndex
    }
  }
`);

// export const SUB_POSTS_UPDATES_AND_NEW_CACHE = gql(`
//   subscription SUB_POSTS_UPDATES_AND_NEW_CACHE($updated_timestamp: Int = 1721740000) {
//     graffiti_stream(
//       batch_size: 1
//       cursor: {
//         initial_value: { updated_timestamp: $updated_timestamp }
//         ordering: ASC
//       }
//     ) {
//       id
//       updated_timestamp
//       updated_at
//       locked_funds
//       cache_id(args: {cache_id: "SUB"})
//       timestamp
//       address
//       message
//       postIndex
//     }
//   }
// `);

export const GET_POSTS_USER_BYTIME = gql(`
query GET_POSTS_USER_BYTIME($offset: Int, $address: String = "0", $limit: Int = 25) {
  graffiti(limit: $limit, offset: $offset, order_by: {timestamp: desc_nulls_last}, where: {address: {_eq: $address}}) {
    id
    address
    message
    timestamp
    locked_funds
    created_at
    updated_at
    updated_timestamp
    postIndex
    graffitiToWalls {
      wallName
    }
  }
}
`);

export const GET_POSTS_USER_LOCKEDFUNDS = gql(`
query GET_POSTS_USER_LOCKEDFUNDS($offset: Int, $address: String = "0", $limit: Int = 25) {
  graffiti(limit: $limit, offset: $offset, order_by: {locked_funds: desc_nulls_last}, where: {address: {_eq: $address}}) {
    id
    address
    message
    timestamp
    locked_funds
    created_at
    updated_at
    updated_timestamp
    postIndex
    graffitiToWalls {
      wallName
    }
  }
}
`);

export const GET_USER_INFO = gql(`
  query GET_USER_INFO($address: String) {
  graffiti_aggregate(where: {address: {_eq: $address}}) {
    aggregate {
      sum {
        locked_funds
      }
      count
      min {
        timestamp
      }
    }
  }
}  
  `);

export const GET_LEADERBOARD = gql(`
    query GET_LEADERBOARD($address: String) {
    graffiti_leaderboard {
      sum_locked_funds
      address
      graffiti_count
    }
  }  
  `);

// export const GET_COMMUNITIES = gql(`
//     query GET_COMMUNITIES {
//       walls(order_by: {wallIndex: asc_nulls_first}) {
//         created_at
//         postCost
//         wallIndex
//         wallName
//       }
//     }
// `);

export const GET_COMMUNITIES_BY_LOCKED_FUNDS = gql(`
  query GET_COMMUNITIES_BY_LOCKED_FUNDS {
  wallsByFunds {
    sum_locked_funds
    wallIndex
    postCost
    wallName
    created_at
  }
}
`);

export const GET_SPECIFIC_COMMUNITY = gql(`
  query GET_SPECIFIC_COMMUNITY($wallName: String = "Default Wall") {
    walls(where: {wallName: {_eq: $wallName}}) {
      created_at
      postCost
      wallIndex
      wallName
  }
}
`);

export const GET_SPECIFIC_POST = gql(`
query GET_SPECIFIC_POST($id: Int = 10) {
  graffiti(where: {postIndex: {_eq: $id}}) {
    address
    created_at
    id
    locked_funds
    message
    postIndex
    timestamp
    updated_at
    updated_timestamp
    wallIndex
    graffitiToWalls {
      wallName
    }
  }
}
`);

export const GET_FEATURED_POSTS = gql(`
query GET_FEATURED_POSTS {
  graffiti_featured_with_walls(limit: 3) {
    address
    created_at
    id
    locked_funds
    message
    randomized_score
    timestamp
    unindice
    updated_at
    updated_timestamp
    wallIndex
    wallName
  }
}
  `);

export const GET_FEATURED_HASHTAGS = gql(`
  query GET_FEATURED_HASHTAGS @cached(ttl: 120) {
    hashtag_trends(limit: 10) {
      hashtag
      hashtag_locked_funds
  }
}
`);

export const GET_QUERY_SEARCH =
  gql(`query GET_QUERY_SEARCH($query: String = "", $offset: Int = 0) {
  search_posts(args: {search: $query}, limit: 10, offset: $offset) {
    address
    created_at
    graffitiToWalls {
      wallName
      wallIndex
    }
    id
    locked_funds
    message
    postIndex
    timestamp
    updated_at
    updated_timestamp
    wallIndex
  }
}`);
