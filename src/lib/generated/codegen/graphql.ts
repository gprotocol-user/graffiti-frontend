/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  float8: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

export type Cache_Id_Graffiti_Args = {
  cache_id?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Deposittopost_Args = {
  owner?: InputMaybe<Scalars['String']['input']>;
  postindex?: InputMaybe<Scalars['Int']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

/** columns and relationships of "graffiti" */
export type Graffiti = {
  __typename?: 'graffiti';
  address: Scalars['String']['output'];
  /** A computed field, executes function "cache_id_col_helper4" */
  cache_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  graffitiToWalls?: Maybe<Walls>;
  id: Scalars['Int']['output'];
  locked_funds: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  postIndex: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_timestamp: Scalars['Int']['output'];
  wallIndex: Scalars['bigint']['output'];
};


/** columns and relationships of "graffiti" */
export type GraffitiCache_IdArgs = {
  args: Cache_Id_Graffiti_Args;
};

/** aggregated selection of "graffiti" */
export type Graffiti_Aggregate = {
  __typename?: 'graffiti_aggregate';
  aggregate?: Maybe<Graffiti_Aggregate_Fields>;
  nodes: Array<Graffiti>;
};

/** aggregate fields of "graffiti" */
export type Graffiti_Aggregate_Fields = {
  __typename?: 'graffiti_aggregate_fields';
  avg?: Maybe<Graffiti_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Graffiti_Max_Fields>;
  min?: Maybe<Graffiti_Min_Fields>;
  stddev?: Maybe<Graffiti_Stddev_Fields>;
  stddev_pop?: Maybe<Graffiti_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Graffiti_Stddev_Samp_Fields>;
  sum?: Maybe<Graffiti_Sum_Fields>;
  var_pop?: Maybe<Graffiti_Var_Pop_Fields>;
  var_samp?: Maybe<Graffiti_Var_Samp_Fields>;
  variance?: Maybe<Graffiti_Variance_Fields>;
};


/** aggregate fields of "graffiti" */
export type Graffiti_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Graffiti_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Graffiti_Avg_Fields = {
  __typename?: 'graffiti_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  locked_funds?: Maybe<Scalars['Float']['output']>;
  postIndex?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['Float']['output']>;
  updated_timestamp?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "graffiti". All fields are combined with a logical 'AND'. */
export type Graffiti_Bool_Exp = {
  _and?: InputMaybe<Array<Graffiti_Bool_Exp>>;
  _not?: InputMaybe<Graffiti_Bool_Exp>;
  _or?: InputMaybe<Array<Graffiti_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  graffitiToWalls?: InputMaybe<Walls_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  locked_funds?: InputMaybe<Int_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  postIndex?: InputMaybe<Int_Comparison_Exp>;
  timestamp?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_timestamp?: InputMaybe<Int_Comparison_Exp>;
  wallIndex?: InputMaybe<Bigint_Comparison_Exp>;
};

/** graffiti_cache_helperNative Query Arguments */
export type Graffiti_Cache_Helper_Arguments = {
  cache_id?: InputMaybe<Scalars['String']['input']>;
};

export type Graffiti_Cache_Helper_Model = {
  __typename?: 'graffiti_cache_helper_model';
  cache_id: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the logical model for "graffiti_cache_helper_model". All fields are combined with a logical 'AND'. */
export type Graffiti_Cache_Helper_Model_Bool_Exp_Bool_Exp = {
  _and?: InputMaybe<Array<Graffiti_Cache_Helper_Model_Bool_Exp_Bool_Exp>>;
  _not?: InputMaybe<Graffiti_Cache_Helper_Model_Bool_Exp_Bool_Exp>;
  _or?: InputMaybe<Array<Graffiti_Cache_Helper_Model_Bool_Exp_Bool_Exp>>;
  cache_id?: InputMaybe<String_Comparison_Exp>;
};

export enum Graffiti_Cache_Helper_Model_Enum_Name {
  /** column name */
  CacheId = 'cache_id'
}

/** Ordering options when selecting data from "graffiti_cache_helper_model". */
export type Graffiti_Cache_Helper_Model_Order_By = {
  cache_id?: InputMaybe<Order_By>;
};

/** unique or primary key constraints on table "graffiti" */
export enum Graffiti_Constraint {
  /** unique or primary key constraint on columns "unindice" */
  GraffitiElindiceKey = 'graffiti_elindice_key',
  /** unique or primary key constraint on columns "id" */
  GraffitiIdKey = 'graffiti_id_key',
  /** unique or primary key constraint on columns "id" */
  GraffitiPkey = 'graffiti_pkey'
}

/** columns and relationships of "graffiti_featured" */
export type Graffiti_Featured = {
  __typename?: 'graffiti_featured';
  address?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  locked_funds?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  randomized_score?: Maybe<Scalars['float8']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
  unindice?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_timestamp?: Maybe<Scalars['Int']['output']>;
  wallIndex?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "graffiti_featured" */
export type Graffiti_Featured_Aggregate = {
  __typename?: 'graffiti_featured_aggregate';
  aggregate?: Maybe<Graffiti_Featured_Aggregate_Fields>;
  nodes: Array<Graffiti_Featured>;
};

/** aggregate fields of "graffiti_featured" */
export type Graffiti_Featured_Aggregate_Fields = {
  __typename?: 'graffiti_featured_aggregate_fields';
  avg?: Maybe<Graffiti_Featured_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Graffiti_Featured_Max_Fields>;
  min?: Maybe<Graffiti_Featured_Min_Fields>;
  stddev?: Maybe<Graffiti_Featured_Stddev_Fields>;
  stddev_pop?: Maybe<Graffiti_Featured_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Graffiti_Featured_Stddev_Samp_Fields>;
  sum?: Maybe<Graffiti_Featured_Sum_Fields>;
  var_pop?: Maybe<Graffiti_Featured_Var_Pop_Fields>;
  var_samp?: Maybe<Graffiti_Featured_Var_Samp_Fields>;
  variance?: Maybe<Graffiti_Featured_Variance_Fields>;
};


/** aggregate fields of "graffiti_featured" */
export type Graffiti_Featured_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Graffiti_Featured_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Graffiti_Featured_Avg_Fields = {
  __typename?: 'graffiti_featured_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  locked_funds?: Maybe<Scalars['Float']['output']>;
  randomized_score?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['Float']['output']>;
  unindice?: Maybe<Scalars['Float']['output']>;
  updated_timestamp?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "graffiti_featured". All fields are combined with a logical 'AND'. */
export type Graffiti_Featured_Bool_Exp = {
  _and?: InputMaybe<Array<Graffiti_Featured_Bool_Exp>>;
  _not?: InputMaybe<Graffiti_Featured_Bool_Exp>;
  _or?: InputMaybe<Array<Graffiti_Featured_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  locked_funds?: InputMaybe<Int_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  randomized_score?: InputMaybe<Float8_Comparison_Exp>;
  timestamp?: InputMaybe<Int_Comparison_Exp>;
  unindice?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_timestamp?: InputMaybe<Int_Comparison_Exp>;
  wallIndex?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Graffiti_Featured_Max_Fields = {
  __typename?: 'graffiti_featured_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  locked_funds?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  randomized_score?: Maybe<Scalars['float8']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
  unindice?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_timestamp?: Maybe<Scalars['Int']['output']>;
  wallIndex?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Graffiti_Featured_Min_Fields = {
  __typename?: 'graffiti_featured_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  locked_funds?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  randomized_score?: Maybe<Scalars['float8']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
  unindice?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_timestamp?: Maybe<Scalars['Int']['output']>;
  wallIndex?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "graffiti_featured". */
export type Graffiti_Featured_Order_By = {
  address?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  locked_funds?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  randomized_score?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  unindice?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_timestamp?: InputMaybe<Order_By>;
  wallIndex?: InputMaybe<Order_By>;
};

/** select columns of table "graffiti_featured" */
export enum Graffiti_Featured_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LockedFunds = 'locked_funds',
  /** column name */
  Message = 'message',
  /** column name */
  RandomizedScore = 'randomized_score',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Unindice = 'unindice',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedTimestamp = 'updated_timestamp',
  /** column name */
  WallIndex = 'wallIndex'
}

/** aggregate stddev on columns */
export type Graffiti_Featured_Stddev_Fields = {
  __typename?: 'graffiti_featured_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  locked_funds?: Maybe<Scalars['Float']['output']>;
  randomized_score?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['Float']['output']>;
  unindice?: Maybe<Scalars['Float']['output']>;
  updated_timestamp?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Graffiti_Featured_Stddev_Pop_Fields = {
  __typename?: 'graffiti_featured_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  locked_funds?: Maybe<Scalars['Float']['output']>;
  randomized_score?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['Float']['output']>;
  unindice?: Maybe<Scalars['Float']['output']>;
  updated_timestamp?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Graffiti_Featured_Stddev_Samp_Fields = {
  __typename?: 'graffiti_featured_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  locked_funds?: Maybe<Scalars['Float']['output']>;
  randomized_score?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['Float']['output']>;
  unindice?: Maybe<Scalars['Float']['output']>;
  updated_timestamp?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "graffiti_featured" */
export type Graffiti_Featured_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Graffiti_Featured_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Graffiti_Featured_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locked_funds?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  randomized_score?: InputMaybe<Scalars['float8']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  unindice?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_timestamp?: InputMaybe<Scalars['Int']['input']>;
  wallIndex?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Graffiti_Featured_Sum_Fields = {
  __typename?: 'graffiti_featured_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  locked_funds?: Maybe<Scalars['Int']['output']>;
  randomized_score?: Maybe<Scalars['float8']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
  unindice?: Maybe<Scalars['Int']['output']>;
  updated_timestamp?: Maybe<Scalars['Int']['output']>;
  wallIndex?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Graffiti_Featured_Var_Pop_Fields = {
  __typename?: 'graffiti_featured_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  locked_funds?: Maybe<Scalars['Float']['output']>;
  randomized_score?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['Float']['output']>;
  unindice?: Maybe<Scalars['Float']['output']>;
  updated_timestamp?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Graffiti_Featured_Var_Samp_Fields = {
  __typename?: 'graffiti_featured_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  locked_funds?: Maybe<Scalars['Float']['output']>;
  randomized_score?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['Float']['output']>;
  unindice?: Maybe<Scalars['Float']['output']>;
  updated_timestamp?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Graffiti_Featured_Variance_Fields = {
  __typename?: 'graffiti_featured_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  locked_funds?: Maybe<Scalars['Float']['output']>;
  randomized_score?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['Float']['output']>;
  unindice?: Maybe<Scalars['Float']['output']>;
  updated_timestamp?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "graffiti_featured_with_walls" */
export type Graffiti_Featured_With_Walls = {
  __typename?: 'graffiti_featured_with_walls';
  address?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  locked_funds?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  randomized_score?: Maybe<Scalars['float8']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
  unindice?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_timestamp?: Maybe<Scalars['Int']['output']>;
  wallIndex?: Maybe<Scalars['bigint']['output']>;
  wallName?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "graffiti_featured_with_walls" */
export type Graffiti_Featured_With_Walls_Aggregate = {
  __typename?: 'graffiti_featured_with_walls_aggregate';
  aggregate?: Maybe<Graffiti_Featured_With_Walls_Aggregate_Fields>;
  nodes: Array<Graffiti_Featured_With_Walls>;
};

/** aggregate fields of "graffiti_featured_with_walls" */
export type Graffiti_Featured_With_Walls_Aggregate_Fields = {
  __typename?: 'graffiti_featured_with_walls_aggregate_fields';
  avg?: Maybe<Graffiti_Featured_With_Walls_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Graffiti_Featured_With_Walls_Max_Fields>;
  min?: Maybe<Graffiti_Featured_With_Walls_Min_Fields>;
  stddev?: Maybe<Graffiti_Featured_With_Walls_Stddev_Fields>;
  stddev_pop?: Maybe<Graffiti_Featured_With_Walls_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Graffiti_Featured_With_Walls_Stddev_Samp_Fields>;
  sum?: Maybe<Graffiti_Featured_With_Walls_Sum_Fields>;
  var_pop?: Maybe<Graffiti_Featured_With_Walls_Var_Pop_Fields>;
  var_samp?: Maybe<Graffiti_Featured_With_Walls_Var_Samp_Fields>;
  variance?: Maybe<Graffiti_Featured_With_Walls_Variance_Fields>;
};


/** aggregate fields of "graffiti_featured_with_walls" */
export type Graffiti_Featured_With_Walls_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Graffiti_Featured_With_Walls_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Graffiti_Featured_With_Walls_Avg_Fields = {
  __typename?: 'graffiti_featured_with_walls_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  locked_funds?: Maybe<Scalars['Float']['output']>;
  randomized_score?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['Float']['output']>;
  unindice?: Maybe<Scalars['Float']['output']>;
  updated_timestamp?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "graffiti_featured_with_walls". All fields are combined with a logical 'AND'. */
export type Graffiti_Featured_With_Walls_Bool_Exp = {
  _and?: InputMaybe<Array<Graffiti_Featured_With_Walls_Bool_Exp>>;
  _not?: InputMaybe<Graffiti_Featured_With_Walls_Bool_Exp>;
  _or?: InputMaybe<Array<Graffiti_Featured_With_Walls_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  locked_funds?: InputMaybe<Int_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  randomized_score?: InputMaybe<Float8_Comparison_Exp>;
  timestamp?: InputMaybe<Int_Comparison_Exp>;
  unindice?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_timestamp?: InputMaybe<Int_Comparison_Exp>;
  wallIndex?: InputMaybe<Bigint_Comparison_Exp>;
  wallName?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Graffiti_Featured_With_Walls_Max_Fields = {
  __typename?: 'graffiti_featured_with_walls_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  locked_funds?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  randomized_score?: Maybe<Scalars['float8']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
  unindice?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_timestamp?: Maybe<Scalars['Int']['output']>;
  wallIndex?: Maybe<Scalars['bigint']['output']>;
  wallName?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Graffiti_Featured_With_Walls_Min_Fields = {
  __typename?: 'graffiti_featured_with_walls_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  locked_funds?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  randomized_score?: Maybe<Scalars['float8']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
  unindice?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_timestamp?: Maybe<Scalars['Int']['output']>;
  wallIndex?: Maybe<Scalars['bigint']['output']>;
  wallName?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "graffiti_featured_with_walls". */
export type Graffiti_Featured_With_Walls_Order_By = {
  address?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  locked_funds?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  randomized_score?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  unindice?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_timestamp?: InputMaybe<Order_By>;
  wallIndex?: InputMaybe<Order_By>;
  wallName?: InputMaybe<Order_By>;
};

/** select columns of table "graffiti_featured_with_walls" */
export enum Graffiti_Featured_With_Walls_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LockedFunds = 'locked_funds',
  /** column name */
  Message = 'message',
  /** column name */
  RandomizedScore = 'randomized_score',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Unindice = 'unindice',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedTimestamp = 'updated_timestamp',
  /** column name */
  WallIndex = 'wallIndex',
  /** column name */
  WallName = 'wallName'
}

/** aggregate stddev on columns */
export type Graffiti_Featured_With_Walls_Stddev_Fields = {
  __typename?: 'graffiti_featured_with_walls_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  locked_funds?: Maybe<Scalars['Float']['output']>;
  randomized_score?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['Float']['output']>;
  unindice?: Maybe<Scalars['Float']['output']>;
  updated_timestamp?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Graffiti_Featured_With_Walls_Stddev_Pop_Fields = {
  __typename?: 'graffiti_featured_with_walls_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  locked_funds?: Maybe<Scalars['Float']['output']>;
  randomized_score?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['Float']['output']>;
  unindice?: Maybe<Scalars['Float']['output']>;
  updated_timestamp?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Graffiti_Featured_With_Walls_Stddev_Samp_Fields = {
  __typename?: 'graffiti_featured_with_walls_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  locked_funds?: Maybe<Scalars['Float']['output']>;
  randomized_score?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['Float']['output']>;
  unindice?: Maybe<Scalars['Float']['output']>;
  updated_timestamp?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "graffiti_featured_with_walls" */
export type Graffiti_Featured_With_Walls_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Graffiti_Featured_With_Walls_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Graffiti_Featured_With_Walls_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locked_funds?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  randomized_score?: InputMaybe<Scalars['float8']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  unindice?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_timestamp?: InputMaybe<Scalars['Int']['input']>;
  wallIndex?: InputMaybe<Scalars['bigint']['input']>;
  wallName?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Graffiti_Featured_With_Walls_Sum_Fields = {
  __typename?: 'graffiti_featured_with_walls_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  locked_funds?: Maybe<Scalars['Int']['output']>;
  randomized_score?: Maybe<Scalars['float8']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
  unindice?: Maybe<Scalars['Int']['output']>;
  updated_timestamp?: Maybe<Scalars['Int']['output']>;
  wallIndex?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Graffiti_Featured_With_Walls_Var_Pop_Fields = {
  __typename?: 'graffiti_featured_with_walls_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  locked_funds?: Maybe<Scalars['Float']['output']>;
  randomized_score?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['Float']['output']>;
  unindice?: Maybe<Scalars['Float']['output']>;
  updated_timestamp?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Graffiti_Featured_With_Walls_Var_Samp_Fields = {
  __typename?: 'graffiti_featured_with_walls_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  locked_funds?: Maybe<Scalars['Float']['output']>;
  randomized_score?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['Float']['output']>;
  unindice?: Maybe<Scalars['Float']['output']>;
  updated_timestamp?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Graffiti_Featured_With_Walls_Variance_Fields = {
  __typename?: 'graffiti_featured_with_walls_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  locked_funds?: Maybe<Scalars['Float']['output']>;
  randomized_score?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['Float']['output']>;
  unindice?: Maybe<Scalars['Float']['output']>;
  updated_timestamp?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** input type for incrementing numeric columns in table "graffiti" */
export type Graffiti_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  locked_funds?: InputMaybe<Scalars['Int']['input']>;
  postIndex?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  updated_timestamp?: InputMaybe<Scalars['Int']['input']>;
  wallIndex?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "graffiti" */
export type Graffiti_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  graffitiToWalls?: InputMaybe<Walls_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locked_funds?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  postIndex?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_timestamp?: InputMaybe<Scalars['Int']['input']>;
  wallIndex?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "graffiti_leaderboard" */
export type Graffiti_Leaderboard = {
  __typename?: 'graffiti_leaderboard';
  address?: Maybe<Scalars['String']['output']>;
  graffiti_count?: Maybe<Scalars['bigint']['output']>;
  max_created_at?: Maybe<Scalars['timestamptz']['output']>;
  min_created_at?: Maybe<Scalars['timestamptz']['output']>;
  sum_locked_funds?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "graffiti_leaderboard" */
export type Graffiti_Leaderboard_Aggregate = {
  __typename?: 'graffiti_leaderboard_aggregate';
  aggregate?: Maybe<Graffiti_Leaderboard_Aggregate_Fields>;
  nodes: Array<Graffiti_Leaderboard>;
};

/** aggregate fields of "graffiti_leaderboard" */
export type Graffiti_Leaderboard_Aggregate_Fields = {
  __typename?: 'graffiti_leaderboard_aggregate_fields';
  avg?: Maybe<Graffiti_Leaderboard_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Graffiti_Leaderboard_Max_Fields>;
  min?: Maybe<Graffiti_Leaderboard_Min_Fields>;
  stddev?: Maybe<Graffiti_Leaderboard_Stddev_Fields>;
  stddev_pop?: Maybe<Graffiti_Leaderboard_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Graffiti_Leaderboard_Stddev_Samp_Fields>;
  sum?: Maybe<Graffiti_Leaderboard_Sum_Fields>;
  var_pop?: Maybe<Graffiti_Leaderboard_Var_Pop_Fields>;
  var_samp?: Maybe<Graffiti_Leaderboard_Var_Samp_Fields>;
  variance?: Maybe<Graffiti_Leaderboard_Variance_Fields>;
};


/** aggregate fields of "graffiti_leaderboard" */
export type Graffiti_Leaderboard_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Graffiti_Leaderboard_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Graffiti_Leaderboard_Avg_Fields = {
  __typename?: 'graffiti_leaderboard_avg_fields';
  graffiti_count?: Maybe<Scalars['Float']['output']>;
  sum_locked_funds?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "graffiti_leaderboard". All fields are combined with a logical 'AND'. */
export type Graffiti_Leaderboard_Bool_Exp = {
  _and?: InputMaybe<Array<Graffiti_Leaderboard_Bool_Exp>>;
  _not?: InputMaybe<Graffiti_Leaderboard_Bool_Exp>;
  _or?: InputMaybe<Array<Graffiti_Leaderboard_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  graffiti_count?: InputMaybe<Bigint_Comparison_Exp>;
  max_created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  min_created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  sum_locked_funds?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Graffiti_Leaderboard_Max_Fields = {
  __typename?: 'graffiti_leaderboard_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  graffiti_count?: Maybe<Scalars['bigint']['output']>;
  max_created_at?: Maybe<Scalars['timestamptz']['output']>;
  min_created_at?: Maybe<Scalars['timestamptz']['output']>;
  sum_locked_funds?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Graffiti_Leaderboard_Min_Fields = {
  __typename?: 'graffiti_leaderboard_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  graffiti_count?: Maybe<Scalars['bigint']['output']>;
  max_created_at?: Maybe<Scalars['timestamptz']['output']>;
  min_created_at?: Maybe<Scalars['timestamptz']['output']>;
  sum_locked_funds?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "graffiti_leaderboard". */
export type Graffiti_Leaderboard_Order_By = {
  address?: InputMaybe<Order_By>;
  graffiti_count?: InputMaybe<Order_By>;
  max_created_at?: InputMaybe<Order_By>;
  min_created_at?: InputMaybe<Order_By>;
  sum_locked_funds?: InputMaybe<Order_By>;
};

/** select columns of table "graffiti_leaderboard" */
export enum Graffiti_Leaderboard_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  GraffitiCount = 'graffiti_count',
  /** column name */
  MaxCreatedAt = 'max_created_at',
  /** column name */
  MinCreatedAt = 'min_created_at',
  /** column name */
  SumLockedFunds = 'sum_locked_funds'
}

/** aggregate stddev on columns */
export type Graffiti_Leaderboard_Stddev_Fields = {
  __typename?: 'graffiti_leaderboard_stddev_fields';
  graffiti_count?: Maybe<Scalars['Float']['output']>;
  sum_locked_funds?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Graffiti_Leaderboard_Stddev_Pop_Fields = {
  __typename?: 'graffiti_leaderboard_stddev_pop_fields';
  graffiti_count?: Maybe<Scalars['Float']['output']>;
  sum_locked_funds?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Graffiti_Leaderboard_Stddev_Samp_Fields = {
  __typename?: 'graffiti_leaderboard_stddev_samp_fields';
  graffiti_count?: Maybe<Scalars['Float']['output']>;
  sum_locked_funds?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "graffiti_leaderboard" */
export type Graffiti_Leaderboard_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Graffiti_Leaderboard_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Graffiti_Leaderboard_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  graffiti_count?: InputMaybe<Scalars['bigint']['input']>;
  max_created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  min_created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  sum_locked_funds?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Graffiti_Leaderboard_Sum_Fields = {
  __typename?: 'graffiti_leaderboard_sum_fields';
  graffiti_count?: Maybe<Scalars['bigint']['output']>;
  sum_locked_funds?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Graffiti_Leaderboard_Var_Pop_Fields = {
  __typename?: 'graffiti_leaderboard_var_pop_fields';
  graffiti_count?: Maybe<Scalars['Float']['output']>;
  sum_locked_funds?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Graffiti_Leaderboard_Var_Samp_Fields = {
  __typename?: 'graffiti_leaderboard_var_samp_fields';
  graffiti_count?: Maybe<Scalars['Float']['output']>;
  sum_locked_funds?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Graffiti_Leaderboard_Variance_Fields = {
  __typename?: 'graffiti_leaderboard_variance_fields';
  graffiti_count?: Maybe<Scalars['Float']['output']>;
  sum_locked_funds?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Graffiti_Max_Fields = {
  __typename?: 'graffiti_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "cache_id_col_helper4" */
  cache_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  locked_funds?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  postIndex?: Maybe<Scalars['Int']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_timestamp?: Maybe<Scalars['Int']['output']>;
  wallIndex?: Maybe<Scalars['bigint']['output']>;
};


/** aggregate max on columns */
export type Graffiti_Max_FieldsCache_IdArgs = {
  args: Cache_Id_Graffiti_Args;
};

/** aggregate min on columns */
export type Graffiti_Min_Fields = {
  __typename?: 'graffiti_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "cache_id_col_helper4" */
  cache_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  locked_funds?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  postIndex?: Maybe<Scalars['Int']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_timestamp?: Maybe<Scalars['Int']['output']>;
  wallIndex?: Maybe<Scalars['bigint']['output']>;
};


/** aggregate min on columns */
export type Graffiti_Min_FieldsCache_IdArgs = {
  args: Cache_Id_Graffiti_Args;
};

/** response of any mutation on the table "graffiti" */
export type Graffiti_Mutation_Response = {
  __typename?: 'graffiti_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Graffiti>;
};

/** on_conflict condition type for table "graffiti" */
export type Graffiti_On_Conflict = {
  constraint: Graffiti_Constraint;
  update_columns?: Array<Graffiti_Update_Column>;
  where?: InputMaybe<Graffiti_Bool_Exp>;
};

/** Ordering options when selecting data from "graffiti". */
export type Graffiti_Order_By = {
  address?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  graffitiToWalls?: InputMaybe<Walls_Order_By>;
  id?: InputMaybe<Order_By>;
  locked_funds?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  postIndex?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_timestamp?: InputMaybe<Order_By>;
  wallIndex?: InputMaybe<Order_By>;
};

/** primary key columns input for table: graffiti */
export type Graffiti_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "graffiti" */
export enum Graffiti_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LockedFunds = 'locked_funds',
  /** column name */
  Message = 'message',
  /** column name */
  PostIndex = 'postIndex',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedTimestamp = 'updated_timestamp',
  /** column name */
  WallIndex = 'wallIndex'
}

/** input type for updating data in table "graffiti" */
export type Graffiti_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locked_funds?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  postIndex?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_timestamp?: InputMaybe<Scalars['Int']['input']>;
  wallIndex?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Graffiti_Stddev_Fields = {
  __typename?: 'graffiti_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  locked_funds?: Maybe<Scalars['Float']['output']>;
  postIndex?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['Float']['output']>;
  updated_timestamp?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Graffiti_Stddev_Pop_Fields = {
  __typename?: 'graffiti_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  locked_funds?: Maybe<Scalars['Float']['output']>;
  postIndex?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['Float']['output']>;
  updated_timestamp?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Graffiti_Stddev_Samp_Fields = {
  __typename?: 'graffiti_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  locked_funds?: Maybe<Scalars['Float']['output']>;
  postIndex?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['Float']['output']>;
  updated_timestamp?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "graffiti" */
export type Graffiti_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Graffiti_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Graffiti_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locked_funds?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  postIndex?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_timestamp?: InputMaybe<Scalars['Int']['input']>;
  wallIndex?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Graffiti_Sum_Fields = {
  __typename?: 'graffiti_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  locked_funds?: Maybe<Scalars['Int']['output']>;
  postIndex?: Maybe<Scalars['Int']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
  updated_timestamp?: Maybe<Scalars['Int']['output']>;
  wallIndex?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "graffiti" */
export enum Graffiti_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LockedFunds = 'locked_funds',
  /** column name */
  Message = 'message',
  /** column name */
  PostIndex = 'postIndex',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedTimestamp = 'updated_timestamp',
  /** column name */
  WallIndex = 'wallIndex'
}

export type Graffiti_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Graffiti_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Graffiti_Set_Input>;
  /** filter the rows which have to be updated */
  where: Graffiti_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Graffiti_Var_Pop_Fields = {
  __typename?: 'graffiti_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  locked_funds?: Maybe<Scalars['Float']['output']>;
  postIndex?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['Float']['output']>;
  updated_timestamp?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Graffiti_Var_Samp_Fields = {
  __typename?: 'graffiti_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  locked_funds?: Maybe<Scalars['Float']['output']>;
  postIndex?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['Float']['output']>;
  updated_timestamp?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Graffiti_Variance_Fields = {
  __typename?: 'graffiti_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  locked_funds?: Maybe<Scalars['Float']['output']>;
  postIndex?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['Float']['output']>;
  updated_timestamp?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "hashtag_trends" */
export type Hashtag_Trends = {
  __typename?: 'hashtag_trends';
  hashtag?: Maybe<Scalars['String']['output']>;
  hashtag_locked_funds?: Maybe<Scalars['numeric']['output']>;
  num_walls?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "hashtag_trends" */
export type Hashtag_Trends_Aggregate = {
  __typename?: 'hashtag_trends_aggregate';
  aggregate?: Maybe<Hashtag_Trends_Aggregate_Fields>;
  nodes: Array<Hashtag_Trends>;
};

/** aggregate fields of "hashtag_trends" */
export type Hashtag_Trends_Aggregate_Fields = {
  __typename?: 'hashtag_trends_aggregate_fields';
  avg?: Maybe<Hashtag_Trends_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Hashtag_Trends_Max_Fields>;
  min?: Maybe<Hashtag_Trends_Min_Fields>;
  stddev?: Maybe<Hashtag_Trends_Stddev_Fields>;
  stddev_pop?: Maybe<Hashtag_Trends_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Hashtag_Trends_Stddev_Samp_Fields>;
  sum?: Maybe<Hashtag_Trends_Sum_Fields>;
  var_pop?: Maybe<Hashtag_Trends_Var_Pop_Fields>;
  var_samp?: Maybe<Hashtag_Trends_Var_Samp_Fields>;
  variance?: Maybe<Hashtag_Trends_Variance_Fields>;
};


/** aggregate fields of "hashtag_trends" */
export type Hashtag_Trends_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Hashtag_Trends_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Hashtag_Trends_Avg_Fields = {
  __typename?: 'hashtag_trends_avg_fields';
  hashtag_locked_funds?: Maybe<Scalars['Float']['output']>;
  num_walls?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "hashtag_trends". All fields are combined with a logical 'AND'. */
export type Hashtag_Trends_Bool_Exp = {
  _and?: InputMaybe<Array<Hashtag_Trends_Bool_Exp>>;
  _not?: InputMaybe<Hashtag_Trends_Bool_Exp>;
  _or?: InputMaybe<Array<Hashtag_Trends_Bool_Exp>>;
  hashtag?: InputMaybe<String_Comparison_Exp>;
  hashtag_locked_funds?: InputMaybe<Numeric_Comparison_Exp>;
  num_walls?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Hashtag_Trends_Max_Fields = {
  __typename?: 'hashtag_trends_max_fields';
  hashtag?: Maybe<Scalars['String']['output']>;
  hashtag_locked_funds?: Maybe<Scalars['numeric']['output']>;
  num_walls?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Hashtag_Trends_Min_Fields = {
  __typename?: 'hashtag_trends_min_fields';
  hashtag?: Maybe<Scalars['String']['output']>;
  hashtag_locked_funds?: Maybe<Scalars['numeric']['output']>;
  num_walls?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "hashtag_trends". */
export type Hashtag_Trends_Order_By = {
  hashtag?: InputMaybe<Order_By>;
  hashtag_locked_funds?: InputMaybe<Order_By>;
  num_walls?: InputMaybe<Order_By>;
};

/** select columns of table "hashtag_trends" */
export enum Hashtag_Trends_Select_Column {
  /** column name */
  Hashtag = 'hashtag',
  /** column name */
  HashtagLockedFunds = 'hashtag_locked_funds',
  /** column name */
  NumWalls = 'num_walls'
}

/** aggregate stddev on columns */
export type Hashtag_Trends_Stddev_Fields = {
  __typename?: 'hashtag_trends_stddev_fields';
  hashtag_locked_funds?: Maybe<Scalars['Float']['output']>;
  num_walls?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Hashtag_Trends_Stddev_Pop_Fields = {
  __typename?: 'hashtag_trends_stddev_pop_fields';
  hashtag_locked_funds?: Maybe<Scalars['Float']['output']>;
  num_walls?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Hashtag_Trends_Stddev_Samp_Fields = {
  __typename?: 'hashtag_trends_stddev_samp_fields';
  hashtag_locked_funds?: Maybe<Scalars['Float']['output']>;
  num_walls?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "hashtag_trends" */
export type Hashtag_Trends_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Hashtag_Trends_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Hashtag_Trends_Stream_Cursor_Value_Input = {
  hashtag?: InputMaybe<Scalars['String']['input']>;
  hashtag_locked_funds?: InputMaybe<Scalars['numeric']['input']>;
  num_walls?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Hashtag_Trends_Sum_Fields = {
  __typename?: 'hashtag_trends_sum_fields';
  hashtag_locked_funds?: Maybe<Scalars['numeric']['output']>;
  num_walls?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Hashtag_Trends_Var_Pop_Fields = {
  __typename?: 'hashtag_trends_var_pop_fields';
  hashtag_locked_funds?: Maybe<Scalars['Float']['output']>;
  num_walls?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Hashtag_Trends_Var_Samp_Fields = {
  __typename?: 'hashtag_trends_var_samp_fields';
  hashtag_locked_funds?: Maybe<Scalars['Float']['output']>;
  num_walls?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Hashtag_Trends_Variance_Fields = {
  __typename?: 'hashtag_trends_variance_fields';
  hashtag_locked_funds?: Maybe<Scalars['Float']['output']>;
  num_walls?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "graffiti" */
  delete_graffiti?: Maybe<Graffiti_Mutation_Response>;
  /** delete single row from the table: "graffiti" */
  delete_graffiti_by_pk?: Maybe<Graffiti>;
  /** delete data from the table: "walls" */
  delete_walls?: Maybe<Walls_Mutation_Response>;
  /** delete single row from the table: "walls" */
  delete_walls_by_pk?: Maybe<Walls>;
  /** execute VOLATILE function "deposittopost" which returns "graffiti" */
  deposittopost: Array<Graffiti>;
  /** insert data into the table: "graffiti" */
  insert_graffiti?: Maybe<Graffiti_Mutation_Response>;
  /** insert a single row into the table: "graffiti" */
  insert_graffiti_one?: Maybe<Graffiti>;
  /** insert data into the table: "walls" */
  insert_walls?: Maybe<Walls_Mutation_Response>;
  /** insert a single row into the table: "walls" */
  insert_walls_one?: Maybe<Walls>;
  /** update data of the table: "graffiti" */
  update_graffiti?: Maybe<Graffiti_Mutation_Response>;
  /** update single row of the table: "graffiti" */
  update_graffiti_by_pk?: Maybe<Graffiti>;
  /** update multiples rows of table: "graffiti" */
  update_graffiti_many?: Maybe<Array<Maybe<Graffiti_Mutation_Response>>>;
  /** update data of the table: "walls" */
  update_walls?: Maybe<Walls_Mutation_Response>;
  /** update single row of the table: "walls" */
  update_walls_by_pk?: Maybe<Walls>;
  /** update multiples rows of table: "walls" */
  update_walls_many?: Maybe<Array<Maybe<Walls_Mutation_Response>>>;
  /** execute VOLATILE function "withdrawalfrompost" which returns "graffiti" */
  withdrawalfrompost: Array<Graffiti>;
};


/** mutation root */
export type Mutation_RootDelete_GraffitiArgs = {
  where: Graffiti_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Graffiti_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_WallsArgs = {
  where: Walls_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Walls_By_PkArgs = {
  wallIndex: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDeposittopostArgs = {
  args: Deposittopost_Args;
  distinct_on?: InputMaybe<Array<Graffiti_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Order_By>>;
  where?: InputMaybe<Graffiti_Bool_Exp>;
};


/** mutation root */
export type Mutation_RootInsert_GraffitiArgs = {
  objects: Array<Graffiti_Insert_Input>;
  on_conflict?: InputMaybe<Graffiti_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Graffiti_OneArgs = {
  object: Graffiti_Insert_Input;
  on_conflict?: InputMaybe<Graffiti_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WallsArgs = {
  objects: Array<Walls_Insert_Input>;
  on_conflict?: InputMaybe<Walls_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Walls_OneArgs = {
  object: Walls_Insert_Input;
  on_conflict?: InputMaybe<Walls_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_GraffitiArgs = {
  _inc?: InputMaybe<Graffiti_Inc_Input>;
  _set?: InputMaybe<Graffiti_Set_Input>;
  where: Graffiti_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Graffiti_By_PkArgs = {
  _inc?: InputMaybe<Graffiti_Inc_Input>;
  _set?: InputMaybe<Graffiti_Set_Input>;
  pk_columns: Graffiti_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Graffiti_ManyArgs = {
  updates: Array<Graffiti_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_WallsArgs = {
  _inc?: InputMaybe<Walls_Inc_Input>;
  _set?: InputMaybe<Walls_Set_Input>;
  where: Walls_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Walls_By_PkArgs = {
  _inc?: InputMaybe<Walls_Inc_Input>;
  _set?: InputMaybe<Walls_Set_Input>;
  pk_columns: Walls_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Walls_ManyArgs = {
  updates: Array<Walls_Updates>;
};


/** mutation root */
export type Mutation_RootWithdrawalfrompostArgs = {
  args: Withdrawalfrompost_Args;
  distinct_on?: InputMaybe<Array<Graffiti_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Order_By>>;
  where?: InputMaybe<Graffiti_Bool_Exp>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "graffiti" */
  graffiti: Array<Graffiti>;
  /** fetch aggregated fields from the table: "graffiti" */
  graffiti_aggregate: Graffiti_Aggregate;
  /** fetch data from the table: "graffiti" using primary key columns */
  graffiti_by_pk?: Maybe<Graffiti>;
  graffiti_cache_helper: Array<Graffiti_Cache_Helper_Model>;
  /** fetch data from the table: "graffiti_featured" */
  graffiti_featured: Array<Graffiti_Featured>;
  /** fetch aggregated fields from the table: "graffiti_featured" */
  graffiti_featured_aggregate: Graffiti_Featured_Aggregate;
  /** fetch data from the table: "graffiti_featured_with_walls" */
  graffiti_featured_with_walls: Array<Graffiti_Featured_With_Walls>;
  /** fetch aggregated fields from the table: "graffiti_featured_with_walls" */
  graffiti_featured_with_walls_aggregate: Graffiti_Featured_With_Walls_Aggregate;
  /** fetch data from the table: "graffiti_leaderboard" */
  graffiti_leaderboard: Array<Graffiti_Leaderboard>;
  /** fetch aggregated fields from the table: "graffiti_leaderboard" */
  graffiti_leaderboard_aggregate: Graffiti_Leaderboard_Aggregate;
  /** fetch data from the table: "hashtag_trends" */
  hashtag_trends: Array<Hashtag_Trends>;
  /** fetch aggregated fields from the table: "hashtag_trends" */
  hashtag_trends_aggregate: Hashtag_Trends_Aggregate;
  /** execute function "search_hashtag" which returns "graffiti" */
  search_hashtag: Array<Graffiti>;
  /** execute function "search_hashtag" and query aggregates on result of table type "graffiti" */
  search_hashtag_aggregate: Graffiti_Aggregate;
  /** execute function "search_posts" which returns "graffiti" */
  search_posts: Array<Graffiti>;
  /** execute function "search_posts" and query aggregates on result of table type "graffiti" */
  search_posts_aggregate: Graffiti_Aggregate;
  /** fetch data from the table: "walls" */
  walls: Array<Walls>;
  /** fetch data from the table: "wallsByFunds" */
  wallsByFunds: Array<WallsByFunds>;
  /** fetch aggregated fields from the table: "wallsByFunds" */
  wallsByFunds_aggregate: WallsByFunds_Aggregate;
  /** fetch aggregated fields from the table: "walls" */
  walls_aggregate: Walls_Aggregate;
  /** fetch data from the table: "walls" using primary key columns */
  walls_by_pk?: Maybe<Walls>;
};


export type Query_RootGraffitiArgs = {
  distinct_on?: InputMaybe<Array<Graffiti_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Order_By>>;
  where?: InputMaybe<Graffiti_Bool_Exp>;
};


export type Query_RootGraffiti_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Graffiti_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Order_By>>;
  where?: InputMaybe<Graffiti_Bool_Exp>;
};


export type Query_RootGraffiti_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootGraffiti_Cache_HelperArgs = {
  args: Graffiti_Cache_Helper_Arguments;
  distinct_on?: InputMaybe<Array<Graffiti_Cache_Helper_Model_Enum_Name>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Cache_Helper_Model_Order_By>>;
  where?: InputMaybe<Graffiti_Cache_Helper_Model_Bool_Exp_Bool_Exp>;
};


export type Query_RootGraffiti_FeaturedArgs = {
  distinct_on?: InputMaybe<Array<Graffiti_Featured_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Featured_Order_By>>;
  where?: InputMaybe<Graffiti_Featured_Bool_Exp>;
};


export type Query_RootGraffiti_Featured_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Graffiti_Featured_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Featured_Order_By>>;
  where?: InputMaybe<Graffiti_Featured_Bool_Exp>;
};


export type Query_RootGraffiti_Featured_With_WallsArgs = {
  distinct_on?: InputMaybe<Array<Graffiti_Featured_With_Walls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Featured_With_Walls_Order_By>>;
  where?: InputMaybe<Graffiti_Featured_With_Walls_Bool_Exp>;
};


export type Query_RootGraffiti_Featured_With_Walls_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Graffiti_Featured_With_Walls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Featured_With_Walls_Order_By>>;
  where?: InputMaybe<Graffiti_Featured_With_Walls_Bool_Exp>;
};


export type Query_RootGraffiti_LeaderboardArgs = {
  distinct_on?: InputMaybe<Array<Graffiti_Leaderboard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Leaderboard_Order_By>>;
  where?: InputMaybe<Graffiti_Leaderboard_Bool_Exp>;
};


export type Query_RootGraffiti_Leaderboard_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Graffiti_Leaderboard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Leaderboard_Order_By>>;
  where?: InputMaybe<Graffiti_Leaderboard_Bool_Exp>;
};


export type Query_RootHashtag_TrendsArgs = {
  distinct_on?: InputMaybe<Array<Hashtag_Trends_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hashtag_Trends_Order_By>>;
  where?: InputMaybe<Hashtag_Trends_Bool_Exp>;
};


export type Query_RootHashtag_Trends_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hashtag_Trends_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hashtag_Trends_Order_By>>;
  where?: InputMaybe<Hashtag_Trends_Bool_Exp>;
};


export type Query_RootSearch_HashtagArgs = {
  args: Search_Hashtag_Args;
  distinct_on?: InputMaybe<Array<Graffiti_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Order_By>>;
  where?: InputMaybe<Graffiti_Bool_Exp>;
};


export type Query_RootSearch_Hashtag_AggregateArgs = {
  args: Search_Hashtag_Args;
  distinct_on?: InputMaybe<Array<Graffiti_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Order_By>>;
  where?: InputMaybe<Graffiti_Bool_Exp>;
};


export type Query_RootSearch_PostsArgs = {
  args: Search_Posts_Args;
  distinct_on?: InputMaybe<Array<Graffiti_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Order_By>>;
  where?: InputMaybe<Graffiti_Bool_Exp>;
};


export type Query_RootSearch_Posts_AggregateArgs = {
  args: Search_Posts_Args;
  distinct_on?: InputMaybe<Array<Graffiti_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Order_By>>;
  where?: InputMaybe<Graffiti_Bool_Exp>;
};


export type Query_RootWallsArgs = {
  distinct_on?: InputMaybe<Array<Walls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Walls_Order_By>>;
  where?: InputMaybe<Walls_Bool_Exp>;
};


export type Query_RootWallsByFundsArgs = {
  distinct_on?: InputMaybe<Array<WallsByFunds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WallsByFunds_Order_By>>;
  where?: InputMaybe<WallsByFunds_Bool_Exp>;
};


export type Query_RootWallsByFunds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<WallsByFunds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WallsByFunds_Order_By>>;
  where?: InputMaybe<WallsByFunds_Bool_Exp>;
};


export type Query_RootWalls_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Walls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Walls_Order_By>>;
  where?: InputMaybe<Walls_Bool_Exp>;
};


export type Query_RootWalls_By_PkArgs = {
  wallIndex: Scalars['bigint']['input'];
};

export type Search_Hashtag_Args = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type Search_Posts_Args = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "graffiti" */
  graffiti: Array<Graffiti>;
  /** fetch aggregated fields from the table: "graffiti" */
  graffiti_aggregate: Graffiti_Aggregate;
  /** fetch data from the table: "graffiti" using primary key columns */
  graffiti_by_pk?: Maybe<Graffiti>;
  graffiti_cache_helper: Array<Graffiti_Cache_Helper_Model>;
  /** fetch data from the table: "graffiti_featured" */
  graffiti_featured: Array<Graffiti_Featured>;
  /** fetch aggregated fields from the table: "graffiti_featured" */
  graffiti_featured_aggregate: Graffiti_Featured_Aggregate;
  /** fetch data from the table in a streaming manner: "graffiti_featured" */
  graffiti_featured_stream: Array<Graffiti_Featured>;
  /** fetch data from the table: "graffiti_featured_with_walls" */
  graffiti_featured_with_walls: Array<Graffiti_Featured_With_Walls>;
  /** fetch aggregated fields from the table: "graffiti_featured_with_walls" */
  graffiti_featured_with_walls_aggregate: Graffiti_Featured_With_Walls_Aggregate;
  /** fetch data from the table in a streaming manner: "graffiti_featured_with_walls" */
  graffiti_featured_with_walls_stream: Array<Graffiti_Featured_With_Walls>;
  /** fetch data from the table: "graffiti_leaderboard" */
  graffiti_leaderboard: Array<Graffiti_Leaderboard>;
  /** fetch aggregated fields from the table: "graffiti_leaderboard" */
  graffiti_leaderboard_aggregate: Graffiti_Leaderboard_Aggregate;
  /** fetch data from the table in a streaming manner: "graffiti_leaderboard" */
  graffiti_leaderboard_stream: Array<Graffiti_Leaderboard>;
  /** fetch data from the table in a streaming manner: "graffiti" */
  graffiti_stream: Array<Graffiti>;
  /** fetch data from the table: "hashtag_trends" */
  hashtag_trends: Array<Hashtag_Trends>;
  /** fetch aggregated fields from the table: "hashtag_trends" */
  hashtag_trends_aggregate: Hashtag_Trends_Aggregate;
  /** fetch data from the table in a streaming manner: "hashtag_trends" */
  hashtag_trends_stream: Array<Hashtag_Trends>;
  /** execute function "search_hashtag" which returns "graffiti" */
  search_hashtag: Array<Graffiti>;
  /** execute function "search_hashtag" and query aggregates on result of table type "graffiti" */
  search_hashtag_aggregate: Graffiti_Aggregate;
  /** execute function "search_posts" which returns "graffiti" */
  search_posts: Array<Graffiti>;
  /** execute function "search_posts" and query aggregates on result of table type "graffiti" */
  search_posts_aggregate: Graffiti_Aggregate;
  /** fetch data from the table: "walls" */
  walls: Array<Walls>;
  /** fetch data from the table: "wallsByFunds" */
  wallsByFunds: Array<WallsByFunds>;
  /** fetch aggregated fields from the table: "wallsByFunds" */
  wallsByFunds_aggregate: WallsByFunds_Aggregate;
  /** fetch data from the table in a streaming manner: "wallsByFunds" */
  wallsByFunds_stream: Array<WallsByFunds>;
  /** fetch aggregated fields from the table: "walls" */
  walls_aggregate: Walls_Aggregate;
  /** fetch data from the table: "walls" using primary key columns */
  walls_by_pk?: Maybe<Walls>;
  /** fetch data from the table in a streaming manner: "walls" */
  walls_stream: Array<Walls>;
};


export type Subscription_RootGraffitiArgs = {
  distinct_on?: InputMaybe<Array<Graffiti_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Order_By>>;
  where?: InputMaybe<Graffiti_Bool_Exp>;
};


export type Subscription_RootGraffiti_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Graffiti_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Order_By>>;
  where?: InputMaybe<Graffiti_Bool_Exp>;
};


export type Subscription_RootGraffiti_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootGraffiti_Cache_HelperArgs = {
  args: Graffiti_Cache_Helper_Arguments;
  distinct_on?: InputMaybe<Array<Graffiti_Cache_Helper_Model_Enum_Name>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Cache_Helper_Model_Order_By>>;
  where?: InputMaybe<Graffiti_Cache_Helper_Model_Bool_Exp_Bool_Exp>;
};


export type Subscription_RootGraffiti_FeaturedArgs = {
  distinct_on?: InputMaybe<Array<Graffiti_Featured_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Featured_Order_By>>;
  where?: InputMaybe<Graffiti_Featured_Bool_Exp>;
};


export type Subscription_RootGraffiti_Featured_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Graffiti_Featured_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Featured_Order_By>>;
  where?: InputMaybe<Graffiti_Featured_Bool_Exp>;
};


export type Subscription_RootGraffiti_Featured_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Graffiti_Featured_Stream_Cursor_Input>>;
  where?: InputMaybe<Graffiti_Featured_Bool_Exp>;
};


export type Subscription_RootGraffiti_Featured_With_WallsArgs = {
  distinct_on?: InputMaybe<Array<Graffiti_Featured_With_Walls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Featured_With_Walls_Order_By>>;
  where?: InputMaybe<Graffiti_Featured_With_Walls_Bool_Exp>;
};


export type Subscription_RootGraffiti_Featured_With_Walls_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Graffiti_Featured_With_Walls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Featured_With_Walls_Order_By>>;
  where?: InputMaybe<Graffiti_Featured_With_Walls_Bool_Exp>;
};


export type Subscription_RootGraffiti_Featured_With_Walls_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Graffiti_Featured_With_Walls_Stream_Cursor_Input>>;
  where?: InputMaybe<Graffiti_Featured_With_Walls_Bool_Exp>;
};


export type Subscription_RootGraffiti_LeaderboardArgs = {
  distinct_on?: InputMaybe<Array<Graffiti_Leaderboard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Leaderboard_Order_By>>;
  where?: InputMaybe<Graffiti_Leaderboard_Bool_Exp>;
};


export type Subscription_RootGraffiti_Leaderboard_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Graffiti_Leaderboard_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Leaderboard_Order_By>>;
  where?: InputMaybe<Graffiti_Leaderboard_Bool_Exp>;
};


export type Subscription_RootGraffiti_Leaderboard_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Graffiti_Leaderboard_Stream_Cursor_Input>>;
  where?: InputMaybe<Graffiti_Leaderboard_Bool_Exp>;
};


export type Subscription_RootGraffiti_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Graffiti_Stream_Cursor_Input>>;
  where?: InputMaybe<Graffiti_Bool_Exp>;
};


export type Subscription_RootHashtag_TrendsArgs = {
  distinct_on?: InputMaybe<Array<Hashtag_Trends_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hashtag_Trends_Order_By>>;
  where?: InputMaybe<Hashtag_Trends_Bool_Exp>;
};


export type Subscription_RootHashtag_Trends_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hashtag_Trends_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hashtag_Trends_Order_By>>;
  where?: InputMaybe<Hashtag_Trends_Bool_Exp>;
};


export type Subscription_RootHashtag_Trends_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Hashtag_Trends_Stream_Cursor_Input>>;
  where?: InputMaybe<Hashtag_Trends_Bool_Exp>;
};


export type Subscription_RootSearch_HashtagArgs = {
  args: Search_Hashtag_Args;
  distinct_on?: InputMaybe<Array<Graffiti_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Order_By>>;
  where?: InputMaybe<Graffiti_Bool_Exp>;
};


export type Subscription_RootSearch_Hashtag_AggregateArgs = {
  args: Search_Hashtag_Args;
  distinct_on?: InputMaybe<Array<Graffiti_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Order_By>>;
  where?: InputMaybe<Graffiti_Bool_Exp>;
};


export type Subscription_RootSearch_PostsArgs = {
  args: Search_Posts_Args;
  distinct_on?: InputMaybe<Array<Graffiti_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Order_By>>;
  where?: InputMaybe<Graffiti_Bool_Exp>;
};


export type Subscription_RootSearch_Posts_AggregateArgs = {
  args: Search_Posts_Args;
  distinct_on?: InputMaybe<Array<Graffiti_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Graffiti_Order_By>>;
  where?: InputMaybe<Graffiti_Bool_Exp>;
};


export type Subscription_RootWallsArgs = {
  distinct_on?: InputMaybe<Array<Walls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Walls_Order_By>>;
  where?: InputMaybe<Walls_Bool_Exp>;
};


export type Subscription_RootWallsByFundsArgs = {
  distinct_on?: InputMaybe<Array<WallsByFunds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WallsByFunds_Order_By>>;
  where?: InputMaybe<WallsByFunds_Bool_Exp>;
};


export type Subscription_RootWallsByFunds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<WallsByFunds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WallsByFunds_Order_By>>;
  where?: InputMaybe<WallsByFunds_Bool_Exp>;
};


export type Subscription_RootWallsByFunds_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<WallsByFunds_Stream_Cursor_Input>>;
  where?: InputMaybe<WallsByFunds_Bool_Exp>;
};


export type Subscription_RootWalls_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Walls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Walls_Order_By>>;
  where?: InputMaybe<Walls_Bool_Exp>;
};


export type Subscription_RootWalls_By_PkArgs = {
  wallIndex: Scalars['bigint']['input'];
};


export type Subscription_RootWalls_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Walls_Stream_Cursor_Input>>;
  where?: InputMaybe<Walls_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "walls" */
export type Walls = {
  __typename?: 'walls';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  postCost: Scalars['Int']['output'];
  wallIndex: Scalars['bigint']['output'];
  wallName: Scalars['String']['output'];
};

/** columns and relationships of "wallsByFunds" */
export type WallsByFunds = {
  __typename?: 'wallsByFunds';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  postCost?: Maybe<Scalars['Int']['output']>;
  sum_locked_funds?: Maybe<Scalars['bigint']['output']>;
  wallIndex?: Maybe<Scalars['bigint']['output']>;
  wallName?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "wallsByFunds" */
export type WallsByFunds_Aggregate = {
  __typename?: 'wallsByFunds_aggregate';
  aggregate?: Maybe<WallsByFunds_Aggregate_Fields>;
  nodes: Array<WallsByFunds>;
};

/** aggregate fields of "wallsByFunds" */
export type WallsByFunds_Aggregate_Fields = {
  __typename?: 'wallsByFunds_aggregate_fields';
  avg?: Maybe<WallsByFunds_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<WallsByFunds_Max_Fields>;
  min?: Maybe<WallsByFunds_Min_Fields>;
  stddev?: Maybe<WallsByFunds_Stddev_Fields>;
  stddev_pop?: Maybe<WallsByFunds_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<WallsByFunds_Stddev_Samp_Fields>;
  sum?: Maybe<WallsByFunds_Sum_Fields>;
  var_pop?: Maybe<WallsByFunds_Var_Pop_Fields>;
  var_samp?: Maybe<WallsByFunds_Var_Samp_Fields>;
  variance?: Maybe<WallsByFunds_Variance_Fields>;
};


/** aggregate fields of "wallsByFunds" */
export type WallsByFunds_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<WallsByFunds_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type WallsByFunds_Avg_Fields = {
  __typename?: 'wallsByFunds_avg_fields';
  postCost?: Maybe<Scalars['Float']['output']>;
  sum_locked_funds?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "wallsByFunds". All fields are combined with a logical 'AND'. */
export type WallsByFunds_Bool_Exp = {
  _and?: InputMaybe<Array<WallsByFunds_Bool_Exp>>;
  _not?: InputMaybe<WallsByFunds_Bool_Exp>;
  _or?: InputMaybe<Array<WallsByFunds_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  postCost?: InputMaybe<Int_Comparison_Exp>;
  sum_locked_funds?: InputMaybe<Bigint_Comparison_Exp>;
  wallIndex?: InputMaybe<Bigint_Comparison_Exp>;
  wallName?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type WallsByFunds_Max_Fields = {
  __typename?: 'wallsByFunds_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  postCost?: Maybe<Scalars['Int']['output']>;
  sum_locked_funds?: Maybe<Scalars['bigint']['output']>;
  wallIndex?: Maybe<Scalars['bigint']['output']>;
  wallName?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type WallsByFunds_Min_Fields = {
  __typename?: 'wallsByFunds_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  postCost?: Maybe<Scalars['Int']['output']>;
  sum_locked_funds?: Maybe<Scalars['bigint']['output']>;
  wallIndex?: Maybe<Scalars['bigint']['output']>;
  wallName?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "wallsByFunds". */
export type WallsByFunds_Order_By = {
  created_at?: InputMaybe<Order_By>;
  postCost?: InputMaybe<Order_By>;
  sum_locked_funds?: InputMaybe<Order_By>;
  wallIndex?: InputMaybe<Order_By>;
  wallName?: InputMaybe<Order_By>;
};

/** select columns of table "wallsByFunds" */
export enum WallsByFunds_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  PostCost = 'postCost',
  /** column name */
  SumLockedFunds = 'sum_locked_funds',
  /** column name */
  WallIndex = 'wallIndex',
  /** column name */
  WallName = 'wallName'
}

/** aggregate stddev on columns */
export type WallsByFunds_Stddev_Fields = {
  __typename?: 'wallsByFunds_stddev_fields';
  postCost?: Maybe<Scalars['Float']['output']>;
  sum_locked_funds?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type WallsByFunds_Stddev_Pop_Fields = {
  __typename?: 'wallsByFunds_stddev_pop_fields';
  postCost?: Maybe<Scalars['Float']['output']>;
  sum_locked_funds?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type WallsByFunds_Stddev_Samp_Fields = {
  __typename?: 'wallsByFunds_stddev_samp_fields';
  postCost?: Maybe<Scalars['Float']['output']>;
  sum_locked_funds?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "wallsByFunds" */
export type WallsByFunds_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: WallsByFunds_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type WallsByFunds_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  postCost?: InputMaybe<Scalars['Int']['input']>;
  sum_locked_funds?: InputMaybe<Scalars['bigint']['input']>;
  wallIndex?: InputMaybe<Scalars['bigint']['input']>;
  wallName?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type WallsByFunds_Sum_Fields = {
  __typename?: 'wallsByFunds_sum_fields';
  postCost?: Maybe<Scalars['Int']['output']>;
  sum_locked_funds?: Maybe<Scalars['bigint']['output']>;
  wallIndex?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type WallsByFunds_Var_Pop_Fields = {
  __typename?: 'wallsByFunds_var_pop_fields';
  postCost?: Maybe<Scalars['Float']['output']>;
  sum_locked_funds?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type WallsByFunds_Var_Samp_Fields = {
  __typename?: 'wallsByFunds_var_samp_fields';
  postCost?: Maybe<Scalars['Float']['output']>;
  sum_locked_funds?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type WallsByFunds_Variance_Fields = {
  __typename?: 'wallsByFunds_variance_fields';
  postCost?: Maybe<Scalars['Float']['output']>;
  sum_locked_funds?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregated selection of "walls" */
export type Walls_Aggregate = {
  __typename?: 'walls_aggregate';
  aggregate?: Maybe<Walls_Aggregate_Fields>;
  nodes: Array<Walls>;
};

/** aggregate fields of "walls" */
export type Walls_Aggregate_Fields = {
  __typename?: 'walls_aggregate_fields';
  avg?: Maybe<Walls_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Walls_Max_Fields>;
  min?: Maybe<Walls_Min_Fields>;
  stddev?: Maybe<Walls_Stddev_Fields>;
  stddev_pop?: Maybe<Walls_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Walls_Stddev_Samp_Fields>;
  sum?: Maybe<Walls_Sum_Fields>;
  var_pop?: Maybe<Walls_Var_Pop_Fields>;
  var_samp?: Maybe<Walls_Var_Samp_Fields>;
  variance?: Maybe<Walls_Variance_Fields>;
};


/** aggregate fields of "walls" */
export type Walls_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Walls_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Walls_Avg_Fields = {
  __typename?: 'walls_avg_fields';
  postCost?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "walls". All fields are combined with a logical 'AND'. */
export type Walls_Bool_Exp = {
  _and?: InputMaybe<Array<Walls_Bool_Exp>>;
  _not?: InputMaybe<Walls_Bool_Exp>;
  _or?: InputMaybe<Array<Walls_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  postCost?: InputMaybe<Int_Comparison_Exp>;
  wallIndex?: InputMaybe<Bigint_Comparison_Exp>;
  wallName?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "walls" */
export enum Walls_Constraint {
  /** unique or primary key constraint on columns "wallIndex" */
  WallsPkey = 'walls_pkey'
}

/** input type for incrementing numeric columns in table "walls" */
export type Walls_Inc_Input = {
  postCost?: InputMaybe<Scalars['Int']['input']>;
  wallIndex?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "walls" */
export type Walls_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  postCost?: InputMaybe<Scalars['Int']['input']>;
  wallIndex?: InputMaybe<Scalars['bigint']['input']>;
  wallName?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Walls_Max_Fields = {
  __typename?: 'walls_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  postCost?: Maybe<Scalars['Int']['output']>;
  wallIndex?: Maybe<Scalars['bigint']['output']>;
  wallName?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Walls_Min_Fields = {
  __typename?: 'walls_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  postCost?: Maybe<Scalars['Int']['output']>;
  wallIndex?: Maybe<Scalars['bigint']['output']>;
  wallName?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "walls" */
export type Walls_Mutation_Response = {
  __typename?: 'walls_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Walls>;
};

/** input type for inserting object relation for remote table "walls" */
export type Walls_Obj_Rel_Insert_Input = {
  data: Walls_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Walls_On_Conflict>;
};

/** on_conflict condition type for table "walls" */
export type Walls_On_Conflict = {
  constraint: Walls_Constraint;
  update_columns?: Array<Walls_Update_Column>;
  where?: InputMaybe<Walls_Bool_Exp>;
};

/** Ordering options when selecting data from "walls". */
export type Walls_Order_By = {
  created_at?: InputMaybe<Order_By>;
  postCost?: InputMaybe<Order_By>;
  wallIndex?: InputMaybe<Order_By>;
  wallName?: InputMaybe<Order_By>;
};

/** primary key columns input for table: walls */
export type Walls_Pk_Columns_Input = {
  wallIndex: Scalars['bigint']['input'];
};

/** select columns of table "walls" */
export enum Walls_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  PostCost = 'postCost',
  /** column name */
  WallIndex = 'wallIndex',
  /** column name */
  WallName = 'wallName'
}

/** input type for updating data in table "walls" */
export type Walls_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  postCost?: InputMaybe<Scalars['Int']['input']>;
  wallIndex?: InputMaybe<Scalars['bigint']['input']>;
  wallName?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Walls_Stddev_Fields = {
  __typename?: 'walls_stddev_fields';
  postCost?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Walls_Stddev_Pop_Fields = {
  __typename?: 'walls_stddev_pop_fields';
  postCost?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Walls_Stddev_Samp_Fields = {
  __typename?: 'walls_stddev_samp_fields';
  postCost?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "walls" */
export type Walls_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Walls_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Walls_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  postCost?: InputMaybe<Scalars['Int']['input']>;
  wallIndex?: InputMaybe<Scalars['bigint']['input']>;
  wallName?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Walls_Sum_Fields = {
  __typename?: 'walls_sum_fields';
  postCost?: Maybe<Scalars['Int']['output']>;
  wallIndex?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "walls" */
export enum Walls_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  PostCost = 'postCost',
  /** column name */
  WallIndex = 'wallIndex',
  /** column name */
  WallName = 'wallName'
}

export type Walls_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Walls_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Walls_Set_Input>;
  /** filter the rows which have to be updated */
  where: Walls_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Walls_Var_Pop_Fields = {
  __typename?: 'walls_var_pop_fields';
  postCost?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Walls_Var_Samp_Fields = {
  __typename?: 'walls_var_samp_fields';
  postCost?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Walls_Variance_Fields = {
  __typename?: 'walls_variance_fields';
  postCost?: Maybe<Scalars['Float']['output']>;
  wallIndex?: Maybe<Scalars['Float']['output']>;
};

export type Withdrawalfrompost_Args = {
  owner?: InputMaybe<Scalars['String']['input']>;
  postindex?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

export type Get_Posts_Timestamp_Aggregate_HelperQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  until?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  basura?: InputMaybe<Scalars['String']['input']>;
  wallIndex?: InputMaybe<Scalars['bigint']['input']>;
}>;


export type Get_Posts_Timestamp_Aggregate_HelperQuery = { __typename?: 'query_root', graffiti_aggregate: { __typename?: 'graffiti_aggregate', nodes: Array<{ __typename?: 'graffiti', id: number, address: string, message: string, timestamp: number, locked_funds: number, postIndex: number }>, aggregate?: { __typename?: 'graffiti_aggregate_fields', min?: { __typename?: 'graffiti_min_fields', locked_funds?: number | null } | null, max?: { __typename?: 'graffiti_max_fields', locked_funds?: number | null, timestamp?: number | null } | null } | null } };

export type Get_Posts_Buyser_Funds_AggregateQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  until?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  basura?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type Get_Posts_Buyser_Funds_AggregateQuery = { __typename?: 'query_root', graffiti_aggregate: { __typename?: 'graffiti_aggregate', nodes: Array<{ __typename?: 'graffiti', id: number, address: string, message: string, timestamp: number, locked_funds: number, postIndex: number, graffitiToWalls?: { __typename?: 'walls', wallName: string } | null }>, aggregate?: { __typename?: 'graffiti_aggregate_fields', min?: { __typename?: 'graffiti_min_fields', locked_funds?: number | null } | null, max?: { __typename?: 'graffiti_max_fields', locked_funds?: number | null, timestamp?: number | null } | null } | null } };

export type Get_Posts_Timestamp_Aggregate_Bytime_TestQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  until?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  basura?: InputMaybe<Scalars['String']['input']>;
  wallIndex?: InputMaybe<Scalars['bigint']['input']>;
}>;


export type Get_Posts_Timestamp_Aggregate_Bytime_TestQuery = { __typename?: 'query_root', graffiti_aggregate: { __typename?: 'graffiti_aggregate', nodes: Array<{ __typename?: 'graffiti', id: number, updated_timestamp: number, updated_at?: any | null, locked_funds: number, timestamp: number, address: string, message: string, postIndex: number }>, aggregate?: { __typename?: 'graffiti_aggregate_fields', min?: { __typename?: 'graffiti_min_fields', locked_funds?: number | null } | null, max?: { __typename?: 'graffiti_max_fields', locked_funds?: number | null, timestamp?: number | null } | null } | null } };

export type Get_Posts_Byuser_Timestamp_AggregateQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['Int']['input']>;
  until?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  basura?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type Get_Posts_Byuser_Timestamp_AggregateQuery = { __typename?: 'query_root', graffiti_aggregate: { __typename?: 'graffiti_aggregate', nodes: Array<{ __typename?: 'graffiti', id: number, updated_timestamp: number, updated_at?: any | null, locked_funds: number, timestamp: number, address: string, message: string, postIndex: number, graffitiToWalls?: { __typename?: 'walls', wallName: string } | null }>, aggregate?: { __typename?: 'graffiti_aggregate_fields', min?: { __typename?: 'graffiti_min_fields', locked_funds?: number | null } | null, max?: { __typename?: 'graffiti_max_fields', locked_funds?: number | null, timestamp?: number | null } | null } | null } };

export type Sub_Posts_UpdatesSubscriptionVariables = Exact<{
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  updated_timestamp?: InputMaybe<Scalars['Int']['input']>;
  wallIndex?: InputMaybe<Scalars['bigint']['input']>;
}>;


export type Sub_Posts_UpdatesSubscription = { __typename?: 'subscription_root', graffiti_stream: Array<{ __typename?: 'graffiti', id: number, updated_timestamp: number, updated_at?: any | null, locked_funds: number, postIndex: number }> };

export type Sub_Posts_Updates_ByuserSubscriptionVariables = Exact<{
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  updated_timestamp?: InputMaybe<Scalars['Int']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type Sub_Posts_Updates_ByuserSubscription = { __typename?: 'subscription_root', graffiti_stream: Array<{ __typename?: 'graffiti', id: number, updated_timestamp: number, updated_at?: any | null, locked_funds: number, postIndex: number }> };

export type Sub_Posts_Updates_And_NewSubscriptionVariables = Exact<{
  updated_timestamp?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Sub_Posts_Updates_And_NewSubscription = { __typename?: 'subscription_root', graffiti_stream: Array<{ __typename?: 'graffiti', id: number, updated_timestamp: number, updated_at?: any | null, locked_funds: number, timestamp: number, address: string, message: string, postIndex: number, wallIndex: any }> };

export type Get_Posts_User_BytimeQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Get_Posts_User_BytimeQuery = { __typename?: 'query_root', graffiti: Array<{ __typename?: 'graffiti', id: number, address: string, message: string, timestamp: number, locked_funds: number, created_at?: any | null, updated_at?: any | null, updated_timestamp: number, postIndex: number, graffitiToWalls?: { __typename?: 'walls', wallName: string } | null }> };

export type Get_Posts_User_LockedfundsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Get_Posts_User_LockedfundsQuery = { __typename?: 'query_root', graffiti: Array<{ __typename?: 'graffiti', id: number, address: string, message: string, timestamp: number, locked_funds: number, created_at?: any | null, updated_at?: any | null, updated_timestamp: number, postIndex: number, graffitiToWalls?: { __typename?: 'walls', wallName: string } | null }> };

export type Get_User_InfoQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type Get_User_InfoQuery = { __typename?: 'query_root', graffiti_aggregate: { __typename?: 'graffiti_aggregate', aggregate?: { __typename?: 'graffiti_aggregate_fields', count: number, sum?: { __typename?: 'graffiti_sum_fields', locked_funds?: number | null } | null, min?: { __typename?: 'graffiti_min_fields', timestamp?: number | null } | null } | null } };

export type Get_LeaderboardQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type Get_LeaderboardQuery = { __typename?: 'query_root', graffiti_leaderboard: Array<{ __typename?: 'graffiti_leaderboard', sum_locked_funds?: any | null, address?: string | null, graffiti_count?: any | null }> };

export type Get_Communities_By_Locked_FundsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_Communities_By_Locked_FundsQuery = { __typename?: 'query_root', wallsByFunds: Array<{ __typename?: 'wallsByFunds', sum_locked_funds?: any | null, wallIndex?: any | null, postCost?: number | null, wallName?: string | null, created_at?: any | null }> };

export type Get_Specific_CommunityQueryVariables = Exact<{
  wallName?: InputMaybe<Scalars['String']['input']>;
}>;


export type Get_Specific_CommunityQuery = { __typename?: 'query_root', walls: Array<{ __typename?: 'walls', created_at?: any | null, postCost: number, wallIndex: any, wallName: string }> };

export type Get_Specific_PostQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Get_Specific_PostQuery = { __typename?: 'query_root', graffiti: Array<{ __typename?: 'graffiti', address: string, created_at?: any | null, id: number, locked_funds: number, message: string, postIndex: number, timestamp: number, updated_at?: any | null, updated_timestamp: number, wallIndex: any, graffitiToWalls?: { __typename?: 'walls', wallName: string } | null }> };

export type Get_Featured_PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_Featured_PostsQuery = { __typename?: 'query_root', graffiti_featured_with_walls: Array<{ __typename?: 'graffiti_featured_with_walls', address?: string | null, created_at?: any | null, id?: number | null, locked_funds?: number | null, message?: string | null, randomized_score?: any | null, timestamp?: number | null, unindice?: number | null, updated_at?: any | null, updated_timestamp?: number | null, wallIndex?: any | null, wallName?: string | null }> };

export type Get_Featured_HashtagsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_Featured_HashtagsQuery = { __typename?: 'query_root', hashtag_trends: Array<{ __typename?: 'hashtag_trends', hashtag?: string | null, hashtag_locked_funds?: any | null }> };

export type Get_Query_SearchQueryVariables = Exact<{
  query?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Get_Query_SearchQuery = { __typename?: 'query_root', search_posts: Array<{ __typename?: 'graffiti', address: string, created_at?: any | null, id: number, locked_funds: number, message: string, postIndex: number, timestamp: number, updated_at?: any | null, updated_timestamp: number, wallIndex: any, graffitiToWalls?: { __typename?: 'walls', wallName: string, wallIndex: any } | null }> };


export const Get_Posts_Timestamp_Aggregate_HelperDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_POSTS_TIMESTAMP_AGGREGATE_HELPER"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"from"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"until"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"basura"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wallIndex"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}},"defaultValue":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"graffiti_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"locked_funds"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"wallIndex"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wallIndex"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"timestamp"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"from"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"timestamp"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"until"}}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"locked_funds"}},{"kind":"Field","name":{"kind":"Name","value":"postIndex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"min"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locked_funds"}}]}},{"kind":"Field","name":{"kind":"Name","value":"max"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locked_funds"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_Posts_Timestamp_Aggregate_HelperQuery, Get_Posts_Timestamp_Aggregate_HelperQueryVariables>;
export const Get_Posts_Buyser_Funds_AggregateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_POSTS_BUYSER_FUNDS_AGGREGATE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"from"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"until"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"basura"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"0","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"graffiti_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"locked_funds"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"address"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"timestamp"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"from"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"timestamp"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"until"}}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"locked_funds"}},{"kind":"Field","name":{"kind":"Name","value":"postIndex"}},{"kind":"Field","name":{"kind":"Name","value":"graffitiToWalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wallName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"min"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locked_funds"}}]}},{"kind":"Field","name":{"kind":"Name","value":"max"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locked_funds"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_Posts_Buyser_Funds_AggregateQuery, Get_Posts_Buyser_Funds_AggregateQueryVariables>;
export const Get_Posts_Timestamp_Aggregate_Bytime_TestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_POSTS_TIMESTAMP_AGGREGATE_BYTIME_TEST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"from"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"until"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"basura"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wallIndex"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}},"defaultValue":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"graffiti_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"timestamp"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"wallIndex"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wallIndex"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"timestamp"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"from"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"timestamp"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"until"}}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"locked_funds"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"postIndex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"min"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locked_funds"}}]}},{"kind":"Field","name":{"kind":"Name","value":"max"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locked_funds"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_Posts_Timestamp_Aggregate_Bytime_TestQuery, Get_Posts_Timestamp_Aggregate_Bytime_TestQueryVariables>;
export const Get_Posts_Byuser_Timestamp_AggregateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_POSTS_BYUSER_TIMESTAMP_AGGREGATE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"from"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"until"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"basura"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"0","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"graffiti_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"timestamp"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"address"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"timestamp"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"from"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"timestamp"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"until"}}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"locked_funds"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"postIndex"}},{"kind":"Field","name":{"kind":"Name","value":"graffitiToWalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wallName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"min"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locked_funds"}}]}},{"kind":"Field","name":{"kind":"Name","value":"max"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locked_funds"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_Posts_Byuser_Timestamp_AggregateQuery, Get_Posts_Byuser_Timestamp_AggregateQueryVariables>;
export const Sub_Posts_UpdatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SUB_POSTS_UPDATES"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_lt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"1000"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_gt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"1"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updated_timestamp"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"1721740000"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wallIndex"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}},"defaultValue":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"graffiti_stream"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"batch_size"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"initial_value"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"updated_timestamp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updated_timestamp"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"ordering"},"value":{"kind":"EnumValue","value":"ASC"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"locked_funds"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_gt"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_lt"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"wallIndex"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wallIndex"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"locked_funds"}},{"kind":"Field","name":{"kind":"Name","value":"postIndex"}}]}}]}}]} as unknown as DocumentNode<Sub_Posts_UpdatesSubscription, Sub_Posts_UpdatesSubscriptionVariables>;
export const Sub_Posts_Updates_ByuserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SUB_POSTS_UPDATES_BYUSER"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_lt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"1000"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_gt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"1"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updated_timestamp"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"1721740000"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"0","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"graffiti_stream"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"batch_size"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"initial_value"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"updated_timestamp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updated_timestamp"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"ordering"},"value":{"kind":"EnumValue","value":"ASC"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"locked_funds"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_gt"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_lt"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"address"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"locked_funds"}},{"kind":"Field","name":{"kind":"Name","value":"postIndex"}}]}}]}}]} as unknown as DocumentNode<Sub_Posts_Updates_ByuserSubscription, Sub_Posts_Updates_ByuserSubscriptionVariables>;
export const Sub_Posts_Updates_And_NewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SUB_POSTS_UPDATES_AND_NEW"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updated_timestamp"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"1721740000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"graffiti_stream"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"batch_size"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"initial_value"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"updated_timestamp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updated_timestamp"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"ordering"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"locked_funds"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"postIndex"}},{"kind":"Field","name":{"kind":"Name","value":"wallIndex"}}]}}]}}]} as unknown as DocumentNode<Sub_Posts_Updates_And_NewSubscription, Sub_Posts_Updates_And_NewSubscriptionVariables>;
export const Get_Posts_User_BytimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_POSTS_USER_BYTIME"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"0","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"25"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"graffiti"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"timestamp"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"address"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"locked_funds"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"postIndex"}},{"kind":"Field","name":{"kind":"Name","value":"graffitiToWalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wallName"}}]}}]}}]}}]} as unknown as DocumentNode<Get_Posts_User_BytimeQuery, Get_Posts_User_BytimeQueryVariables>;
export const Get_Posts_User_LockedfundsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_POSTS_USER_LOCKEDFUNDS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"0","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"25"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"graffiti"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"locked_funds"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"address"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"locked_funds"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"postIndex"}},{"kind":"Field","name":{"kind":"Name","value":"graffitiToWalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wallName"}}]}}]}}]}}]} as unknown as DocumentNode<Get_Posts_User_LockedfundsQuery, Get_Posts_User_LockedfundsQueryVariables>;
export const Get_User_InfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_USER_INFO"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"graffiti_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"address"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locked_funds"}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"min"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_User_InfoQuery, Get_User_InfoQueryVariables>;
export const Get_LeaderboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_LEADERBOARD"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"graffiti_leaderboard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum_locked_funds"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"graffiti_count"}}]}}]}}]} as unknown as DocumentNode<Get_LeaderboardQuery, Get_LeaderboardQueryVariables>;
export const Get_Communities_By_Locked_FundsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_COMMUNITIES_BY_LOCKED_FUNDS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wallsByFunds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum_locked_funds"}},{"kind":"Field","name":{"kind":"Name","value":"wallIndex"}},{"kind":"Field","name":{"kind":"Name","value":"postCost"}},{"kind":"Field","name":{"kind":"Name","value":"wallName"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]} as unknown as DocumentNode<Get_Communities_By_Locked_FundsQuery, Get_Communities_By_Locked_FundsQueryVariables>;
export const Get_Specific_CommunityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_SPECIFIC_COMMUNITY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wallName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"Default Wall","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walls"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"wallName"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wallName"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"postCost"}},{"kind":"Field","name":{"kind":"Name","value":"wallIndex"}},{"kind":"Field","name":{"kind":"Name","value":"wallName"}}]}}]}}]} as unknown as DocumentNode<Get_Specific_CommunityQuery, Get_Specific_CommunityQueryVariables>;
export const Get_Specific_PostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_SPECIFIC_POST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"graffiti"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"postIndex"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"locked_funds"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"postIndex"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"wallIndex"}},{"kind":"Field","name":{"kind":"Name","value":"graffitiToWalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wallName"}}]}}]}}]}}]} as unknown as DocumentNode<Get_Specific_PostQuery, Get_Specific_PostQueryVariables>;
export const Get_Featured_PostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_FEATURED_POSTS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"graffiti_featured_with_walls"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"3"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"locked_funds"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"randomized_score"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"unindice"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"wallIndex"}},{"kind":"Field","name":{"kind":"Name","value":"wallName"}}]}}]}}]} as unknown as DocumentNode<Get_Featured_PostsQuery, Get_Featured_PostsQueryVariables>;
export const Get_Featured_HashtagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_FEATURED_HASHTAGS"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ttl"},"value":{"kind":"IntValue","value":"120"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hashtag_trends"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hashtag"}},{"kind":"Field","name":{"kind":"Name","value":"hashtag_locked_funds"}}]}}]}}]} as unknown as DocumentNode<Get_Featured_HashtagsQuery, Get_Featured_HashtagsQueryVariables>;
export const Get_Query_SearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_QUERY_SEARCH"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search_posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"graffitiToWalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wallName"}},{"kind":"Field","name":{"kind":"Name","value":"wallIndex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"locked_funds"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"postIndex"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"wallIndex"}}]}}]}}]} as unknown as DocumentNode<Get_Query_SearchQuery, Get_Query_SearchQueryVariables>;