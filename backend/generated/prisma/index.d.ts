
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Station
 * 
 */
export type Station = $Result.DefaultSelection<Prisma.$StationPayload>
/**
 * Model TravelHistory
 * 
 */
export type TravelHistory = $Result.DefaultSelection<Prisma.$TravelHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.station`: Exposes CRUD operations for the **Station** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stations
    * const stations = await prisma.station.findMany()
    * ```
    */
  get station(): Prisma.StationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.travelHistory`: Exposes CRUD operations for the **TravelHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TravelHistories
    * const travelHistories = await prisma.travelHistory.findMany()
    * ```
    */
  get travelHistory(): Prisma.TravelHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Station: 'Station',
    TravelHistory: 'TravelHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "station" | "travelHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Station: {
        payload: Prisma.$StationPayload<ExtArgs>
        fields: Prisma.StationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          findFirst: {
            args: Prisma.StationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          findMany: {
            args: Prisma.StationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>[]
          }
          create: {
            args: Prisma.StationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          createMany: {
            args: Prisma.StationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          update: {
            args: Prisma.StationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          deleteMany: {
            args: Prisma.StationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          aggregate: {
            args: Prisma.StationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStation>
          }
          groupBy: {
            args: Prisma.StationGroupByArgs<ExtArgs>
            result: $Utils.Optional<StationGroupByOutputType>[]
          }
          count: {
            args: Prisma.StationCountArgs<ExtArgs>
            result: $Utils.Optional<StationCountAggregateOutputType> | number
          }
        }
      }
      TravelHistory: {
        payload: Prisma.$TravelHistoryPayload<ExtArgs>
        fields: Prisma.TravelHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelHistoryPayload>
          }
          findFirst: {
            args: Prisma.TravelHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelHistoryPayload>
          }
          findMany: {
            args: Prisma.TravelHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelHistoryPayload>[]
          }
          create: {
            args: Prisma.TravelHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelHistoryPayload>
          }
          createMany: {
            args: Prisma.TravelHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TravelHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelHistoryPayload>
          }
          update: {
            args: Prisma.TravelHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TravelHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TravelHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TravelHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelHistoryPayload>
          }
          aggregate: {
            args: Prisma.TravelHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTravelHistory>
          }
          groupBy: {
            args: Prisma.TravelHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TravelHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TravelHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    station?: StationOmit
    travelHistory?: TravelHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    travelHistories: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travelHistories?: boolean | UserCountOutputTypeCountTravelHistoriesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTravelHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelHistoryWhereInput
  }


  /**
   * Count Type StationCountOutputType
   */

  export type StationCountOutputType = {
    fromTravelHistories: number
    toTravelHistories: number
  }

  export type StationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromTravelHistories?: boolean | StationCountOutputTypeCountFromTravelHistoriesArgs
    toTravelHistories?: boolean | StationCountOutputTypeCountToTravelHistoriesArgs
  }

  // Custom InputTypes
  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationCountOutputType
     */
    select?: StationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountFromTravelHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelHistoryWhereInput
  }

  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountToTravelHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    fullname: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    fullname: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    fullname: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullname?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullname?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullname?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    fullname: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    fullname?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    travelHistories?: boolean | User$travelHistoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    fullname?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "fullname" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travelHistories?: boolean | User$travelHistoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      travelHistories: Prisma.$TravelHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      fullname: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    travelHistories<T extends User$travelHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$travelHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly fullname: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.travelHistories
   */
  export type User$travelHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelHistory
     */
    select?: TravelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelHistory
     */
    omit?: TravelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelHistoryInclude<ExtArgs> | null
    where?: TravelHistoryWhereInput
    orderBy?: TravelHistoryOrderByWithRelationInput | TravelHistoryOrderByWithRelationInput[]
    cursor?: TravelHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelHistoryScalarFieldEnum | TravelHistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Station
   */

  export type AggregateStation = {
    _count: StationCountAggregateOutputType | null
    _avg: StationAvgAggregateOutputType | null
    _sum: StationSumAggregateOutputType | null
    _min: StationMinAggregateOutputType | null
    _max: StationMaxAggregateOutputType | null
  }

  export type StationAvgAggregateOutputType = {
    id: number | null
    position: number | null
    fare: number | null
  }

  export type StationSumAggregateOutputType = {
    id: number | null
    position: number | null
    fare: number | null
  }

  export type StationMinAggregateOutputType = {
    id: number | null
    name: string | null
    line: string | null
    position: number | null
    fare: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    line: string | null
    position: number | null
    fare: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StationCountAggregateOutputType = {
    id: number
    name: number
    line: number
    position: number
    fare: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StationAvgAggregateInputType = {
    id?: true
    position?: true
    fare?: true
  }

  export type StationSumAggregateInputType = {
    id?: true
    position?: true
    fare?: true
  }

  export type StationMinAggregateInputType = {
    id?: true
    name?: true
    line?: true
    position?: true
    fare?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StationMaxAggregateInputType = {
    id?: true
    name?: true
    line?: true
    position?: true
    fare?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StationCountAggregateInputType = {
    id?: true
    name?: true
    line?: true
    position?: true
    fare?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Station to aggregate.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stations
    **/
    _count?: true | StationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StationMaxAggregateInputType
  }

  export type GetStationAggregateType<T extends StationAggregateArgs> = {
        [P in keyof T & keyof AggregateStation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStation[P]>
      : GetScalarType<T[P], AggregateStation[P]>
  }




  export type StationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StationWhereInput
    orderBy?: StationOrderByWithAggregationInput | StationOrderByWithAggregationInput[]
    by: StationScalarFieldEnum[] | StationScalarFieldEnum
    having?: StationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StationCountAggregateInputType | true
    _avg?: StationAvgAggregateInputType
    _sum?: StationSumAggregateInputType
    _min?: StationMinAggregateInputType
    _max?: StationMaxAggregateInputType
  }

  export type StationGroupByOutputType = {
    id: number
    name: string
    line: string
    position: number
    fare: number
    createdAt: Date
    updatedAt: Date
    _count: StationCountAggregateOutputType | null
    _avg: StationAvgAggregateOutputType | null
    _sum: StationSumAggregateOutputType | null
    _min: StationMinAggregateOutputType | null
    _max: StationMaxAggregateOutputType | null
  }

  type GetStationGroupByPayload<T extends StationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StationGroupByOutputType[P]>
            : GetScalarType<T[P], StationGroupByOutputType[P]>
        }
      >
    >


  export type StationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    line?: boolean
    position?: boolean
    fare?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fromTravelHistories?: boolean | Station$fromTravelHistoriesArgs<ExtArgs>
    toTravelHistories?: boolean | Station$toTravelHistoriesArgs<ExtArgs>
    _count?: boolean | StationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["station"]>



  export type StationSelectScalar = {
    id?: boolean
    name?: boolean
    line?: boolean
    position?: boolean
    fare?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "line" | "position" | "fare" | "createdAt" | "updatedAt", ExtArgs["result"]["station"]>
  export type StationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromTravelHistories?: boolean | Station$fromTravelHistoriesArgs<ExtArgs>
    toTravelHistories?: boolean | Station$toTravelHistoriesArgs<ExtArgs>
    _count?: boolean | StationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Station"
    objects: {
      fromTravelHistories: Prisma.$TravelHistoryPayload<ExtArgs>[]
      toTravelHistories: Prisma.$TravelHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      line: string
      position: number
      fare: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["station"]>
    composites: {}
  }

  type StationGetPayload<S extends boolean | null | undefined | StationDefaultArgs> = $Result.GetResult<Prisma.$StationPayload, S>

  type StationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StationCountAggregateInputType | true
    }

  export interface StationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Station'], meta: { name: 'Station' } }
    /**
     * Find zero or one Station that matches the filter.
     * @param {StationFindUniqueArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StationFindUniqueArgs>(args: SelectSubset<T, StationFindUniqueArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Station that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StationFindUniqueOrThrowArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StationFindUniqueOrThrowArgs>(args: SelectSubset<T, StationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Station that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindFirstArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StationFindFirstArgs>(args?: SelectSubset<T, StationFindFirstArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Station that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindFirstOrThrowArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StationFindFirstOrThrowArgs>(args?: SelectSubset<T, StationFindFirstOrThrowArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stations
     * const stations = await prisma.station.findMany()
     * 
     * // Get first 10 Stations
     * const stations = await prisma.station.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stationWithIdOnly = await prisma.station.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StationFindManyArgs>(args?: SelectSubset<T, StationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Station.
     * @param {StationCreateArgs} args - Arguments to create a Station.
     * @example
     * // Create one Station
     * const Station = await prisma.station.create({
     *   data: {
     *     // ... data to create a Station
     *   }
     * })
     * 
     */
    create<T extends StationCreateArgs>(args: SelectSubset<T, StationCreateArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stations.
     * @param {StationCreateManyArgs} args - Arguments to create many Stations.
     * @example
     * // Create many Stations
     * const station = await prisma.station.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StationCreateManyArgs>(args?: SelectSubset<T, StationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Station.
     * @param {StationDeleteArgs} args - Arguments to delete one Station.
     * @example
     * // Delete one Station
     * const Station = await prisma.station.delete({
     *   where: {
     *     // ... filter to delete one Station
     *   }
     * })
     * 
     */
    delete<T extends StationDeleteArgs>(args: SelectSubset<T, StationDeleteArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Station.
     * @param {StationUpdateArgs} args - Arguments to update one Station.
     * @example
     * // Update one Station
     * const station = await prisma.station.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StationUpdateArgs>(args: SelectSubset<T, StationUpdateArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stations.
     * @param {StationDeleteManyArgs} args - Arguments to filter Stations to delete.
     * @example
     * // Delete a few Stations
     * const { count } = await prisma.station.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StationDeleteManyArgs>(args?: SelectSubset<T, StationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stations
     * const station = await prisma.station.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StationUpdateManyArgs>(args: SelectSubset<T, StationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Station.
     * @param {StationUpsertArgs} args - Arguments to update or create a Station.
     * @example
     * // Update or create a Station
     * const station = await prisma.station.upsert({
     *   create: {
     *     // ... data to create a Station
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Station we want to update
     *   }
     * })
     */
    upsert<T extends StationUpsertArgs>(args: SelectSubset<T, StationUpsertArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationCountArgs} args - Arguments to filter Stations to count.
     * @example
     * // Count the number of Stations
     * const count = await prisma.station.count({
     *   where: {
     *     // ... the filter for the Stations we want to count
     *   }
     * })
    **/
    count<T extends StationCountArgs>(
      args?: Subset<T, StationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StationAggregateArgs>(args: Subset<T, StationAggregateArgs>): Prisma.PrismaPromise<GetStationAggregateType<T>>

    /**
     * Group by Station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StationGroupByArgs['orderBy'] }
        : { orderBy?: StationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Station model
   */
  readonly fields: StationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Station.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromTravelHistories<T extends Station$fromTravelHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, Station$fromTravelHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    toTravelHistories<T extends Station$toTravelHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, Station$toTravelHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Station model
   */
  interface StationFieldRefs {
    readonly id: FieldRef<"Station", 'Int'>
    readonly name: FieldRef<"Station", 'String'>
    readonly line: FieldRef<"Station", 'String'>
    readonly position: FieldRef<"Station", 'Int'>
    readonly fare: FieldRef<"Station", 'Int'>
    readonly createdAt: FieldRef<"Station", 'DateTime'>
    readonly updatedAt: FieldRef<"Station", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Station findUnique
   */
  export type StationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station findUniqueOrThrow
   */
  export type StationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station findFirst
   */
  export type StationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }

  /**
   * Station findFirstOrThrow
   */
  export type StationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }

  /**
   * Station findMany
   */
  export type StationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Stations to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }

  /**
   * Station create
   */
  export type StationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The data needed to create a Station.
     */
    data: XOR<StationCreateInput, StationUncheckedCreateInput>
  }

  /**
   * Station createMany
   */
  export type StationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stations.
     */
    data: StationCreateManyInput | StationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Station update
   */
  export type StationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The data needed to update a Station.
     */
    data: XOR<StationUpdateInput, StationUncheckedUpdateInput>
    /**
     * Choose, which Station to update.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station updateMany
   */
  export type StationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stations.
     */
    data: XOR<StationUpdateManyMutationInput, StationUncheckedUpdateManyInput>
    /**
     * Filter which Stations to update
     */
    where?: StationWhereInput
    /**
     * Limit how many Stations to update.
     */
    limit?: number
  }

  /**
   * Station upsert
   */
  export type StationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The filter to search for the Station to update in case it exists.
     */
    where: StationWhereUniqueInput
    /**
     * In case the Station found by the `where` argument doesn't exist, create a new Station with this data.
     */
    create: XOR<StationCreateInput, StationUncheckedCreateInput>
    /**
     * In case the Station was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StationUpdateInput, StationUncheckedUpdateInput>
  }

  /**
   * Station delete
   */
  export type StationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter which Station to delete.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station deleteMany
   */
  export type StationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stations to delete
     */
    where?: StationWhereInput
    /**
     * Limit how many Stations to delete.
     */
    limit?: number
  }

  /**
   * Station.fromTravelHistories
   */
  export type Station$fromTravelHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelHistory
     */
    select?: TravelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelHistory
     */
    omit?: TravelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelHistoryInclude<ExtArgs> | null
    where?: TravelHistoryWhereInput
    orderBy?: TravelHistoryOrderByWithRelationInput | TravelHistoryOrderByWithRelationInput[]
    cursor?: TravelHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelHistoryScalarFieldEnum | TravelHistoryScalarFieldEnum[]
  }

  /**
   * Station.toTravelHistories
   */
  export type Station$toTravelHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelHistory
     */
    select?: TravelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelHistory
     */
    omit?: TravelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelHistoryInclude<ExtArgs> | null
    where?: TravelHistoryWhereInput
    orderBy?: TravelHistoryOrderByWithRelationInput | TravelHistoryOrderByWithRelationInput[]
    cursor?: TravelHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelHistoryScalarFieldEnum | TravelHistoryScalarFieldEnum[]
  }

  /**
   * Station without action
   */
  export type StationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
  }


  /**
   * Model TravelHistory
   */

  export type AggregateTravelHistory = {
    _count: TravelHistoryCountAggregateOutputType | null
    _avg: TravelHistoryAvgAggregateOutputType | null
    _sum: TravelHistorySumAggregateOutputType | null
    _min: TravelHistoryMinAggregateOutputType | null
    _max: TravelHistoryMaxAggregateOutputType | null
  }

  export type TravelHistoryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    fromStationId: number | null
    toStationId: number | null
    price: number | null
  }

  export type TravelHistorySumAggregateOutputType = {
    id: number | null
    userId: number | null
    fromStationId: number | null
    toStationId: number | null
    price: number | null
  }

  export type TravelHistoryMinAggregateOutputType = {
    id: number | null
    userId: number | null
    fromStationId: number | null
    toStationId: number | null
    price: number | null
    traveledAt: Date | null
  }

  export type TravelHistoryMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    fromStationId: number | null
    toStationId: number | null
    price: number | null
    traveledAt: Date | null
  }

  export type TravelHistoryCountAggregateOutputType = {
    id: number
    userId: number
    fromStationId: number
    toStationId: number
    price: number
    traveledAt: number
    _all: number
  }


  export type TravelHistoryAvgAggregateInputType = {
    id?: true
    userId?: true
    fromStationId?: true
    toStationId?: true
    price?: true
  }

  export type TravelHistorySumAggregateInputType = {
    id?: true
    userId?: true
    fromStationId?: true
    toStationId?: true
    price?: true
  }

  export type TravelHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    fromStationId?: true
    toStationId?: true
    price?: true
    traveledAt?: true
  }

  export type TravelHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    fromStationId?: true
    toStationId?: true
    price?: true
    traveledAt?: true
  }

  export type TravelHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    fromStationId?: true
    toStationId?: true
    price?: true
    traveledAt?: true
    _all?: true
  }

  export type TravelHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelHistory to aggregate.
     */
    where?: TravelHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelHistories to fetch.
     */
    orderBy?: TravelHistoryOrderByWithRelationInput | TravelHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TravelHistories
    **/
    _count?: true | TravelHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TravelHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TravelHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelHistoryMaxAggregateInputType
  }

  export type GetTravelHistoryAggregateType<T extends TravelHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTravelHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravelHistory[P]>
      : GetScalarType<T[P], AggregateTravelHistory[P]>
  }




  export type TravelHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelHistoryWhereInput
    orderBy?: TravelHistoryOrderByWithAggregationInput | TravelHistoryOrderByWithAggregationInput[]
    by: TravelHistoryScalarFieldEnum[] | TravelHistoryScalarFieldEnum
    having?: TravelHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelHistoryCountAggregateInputType | true
    _avg?: TravelHistoryAvgAggregateInputType
    _sum?: TravelHistorySumAggregateInputType
    _min?: TravelHistoryMinAggregateInputType
    _max?: TravelHistoryMaxAggregateInputType
  }

  export type TravelHistoryGroupByOutputType = {
    id: number
    userId: number
    fromStationId: number
    toStationId: number
    price: number
    traveledAt: Date
    _count: TravelHistoryCountAggregateOutputType | null
    _avg: TravelHistoryAvgAggregateOutputType | null
    _sum: TravelHistorySumAggregateOutputType | null
    _min: TravelHistoryMinAggregateOutputType | null
    _max: TravelHistoryMaxAggregateOutputType | null
  }

  type GetTravelHistoryGroupByPayload<T extends TravelHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TravelHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TravelHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fromStationId?: boolean
    toStationId?: boolean
    price?: boolean
    traveledAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    fromStation?: boolean | StationDefaultArgs<ExtArgs>
    toStation?: boolean | StationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelHistory"]>



  export type TravelHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    fromStationId?: boolean
    toStationId?: boolean
    price?: boolean
    traveledAt?: boolean
  }

  export type TravelHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fromStationId" | "toStationId" | "price" | "traveledAt", ExtArgs["result"]["travelHistory"]>
  export type TravelHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    fromStation?: boolean | StationDefaultArgs<ExtArgs>
    toStation?: boolean | StationDefaultArgs<ExtArgs>
  }

  export type $TravelHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TravelHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      fromStation: Prisma.$StationPayload<ExtArgs>
      toStation: Prisma.$StationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      fromStationId: number
      toStationId: number
      price: number
      traveledAt: Date
    }, ExtArgs["result"]["travelHistory"]>
    composites: {}
  }

  type TravelHistoryGetPayload<S extends boolean | null | undefined | TravelHistoryDefaultArgs> = $Result.GetResult<Prisma.$TravelHistoryPayload, S>

  type TravelHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TravelHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TravelHistoryCountAggregateInputType | true
    }

  export interface TravelHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TravelHistory'], meta: { name: 'TravelHistory' } }
    /**
     * Find zero or one TravelHistory that matches the filter.
     * @param {TravelHistoryFindUniqueArgs} args - Arguments to find a TravelHistory
     * @example
     * // Get one TravelHistory
     * const travelHistory = await prisma.travelHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TravelHistoryFindUniqueArgs>(args: SelectSubset<T, TravelHistoryFindUniqueArgs<ExtArgs>>): Prisma__TravelHistoryClient<$Result.GetResult<Prisma.$TravelHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TravelHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TravelHistoryFindUniqueOrThrowArgs} args - Arguments to find a TravelHistory
     * @example
     * // Get one TravelHistory
     * const travelHistory = await prisma.travelHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TravelHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TravelHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TravelHistoryClient<$Result.GetResult<Prisma.$TravelHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelHistoryFindFirstArgs} args - Arguments to find a TravelHistory
     * @example
     * // Get one TravelHistory
     * const travelHistory = await prisma.travelHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TravelHistoryFindFirstArgs>(args?: SelectSubset<T, TravelHistoryFindFirstArgs<ExtArgs>>): Prisma__TravelHistoryClient<$Result.GetResult<Prisma.$TravelHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelHistoryFindFirstOrThrowArgs} args - Arguments to find a TravelHistory
     * @example
     * // Get one TravelHistory
     * const travelHistory = await prisma.travelHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TravelHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TravelHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TravelHistoryClient<$Result.GetResult<Prisma.$TravelHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TravelHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TravelHistories
     * const travelHistories = await prisma.travelHistory.findMany()
     * 
     * // Get first 10 TravelHistories
     * const travelHistories = await prisma.travelHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const travelHistoryWithIdOnly = await prisma.travelHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TravelHistoryFindManyArgs>(args?: SelectSubset<T, TravelHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TravelHistory.
     * @param {TravelHistoryCreateArgs} args - Arguments to create a TravelHistory.
     * @example
     * // Create one TravelHistory
     * const TravelHistory = await prisma.travelHistory.create({
     *   data: {
     *     // ... data to create a TravelHistory
     *   }
     * })
     * 
     */
    create<T extends TravelHistoryCreateArgs>(args: SelectSubset<T, TravelHistoryCreateArgs<ExtArgs>>): Prisma__TravelHistoryClient<$Result.GetResult<Prisma.$TravelHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TravelHistories.
     * @param {TravelHistoryCreateManyArgs} args - Arguments to create many TravelHistories.
     * @example
     * // Create many TravelHistories
     * const travelHistory = await prisma.travelHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TravelHistoryCreateManyArgs>(args?: SelectSubset<T, TravelHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TravelHistory.
     * @param {TravelHistoryDeleteArgs} args - Arguments to delete one TravelHistory.
     * @example
     * // Delete one TravelHistory
     * const TravelHistory = await prisma.travelHistory.delete({
     *   where: {
     *     // ... filter to delete one TravelHistory
     *   }
     * })
     * 
     */
    delete<T extends TravelHistoryDeleteArgs>(args: SelectSubset<T, TravelHistoryDeleteArgs<ExtArgs>>): Prisma__TravelHistoryClient<$Result.GetResult<Prisma.$TravelHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TravelHistory.
     * @param {TravelHistoryUpdateArgs} args - Arguments to update one TravelHistory.
     * @example
     * // Update one TravelHistory
     * const travelHistory = await prisma.travelHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TravelHistoryUpdateArgs>(args: SelectSubset<T, TravelHistoryUpdateArgs<ExtArgs>>): Prisma__TravelHistoryClient<$Result.GetResult<Prisma.$TravelHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TravelHistories.
     * @param {TravelHistoryDeleteManyArgs} args - Arguments to filter TravelHistories to delete.
     * @example
     * // Delete a few TravelHistories
     * const { count } = await prisma.travelHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TravelHistoryDeleteManyArgs>(args?: SelectSubset<T, TravelHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TravelHistories
     * const travelHistory = await prisma.travelHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TravelHistoryUpdateManyArgs>(args: SelectSubset<T, TravelHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TravelHistory.
     * @param {TravelHistoryUpsertArgs} args - Arguments to update or create a TravelHistory.
     * @example
     * // Update or create a TravelHistory
     * const travelHistory = await prisma.travelHistory.upsert({
     *   create: {
     *     // ... data to create a TravelHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TravelHistory we want to update
     *   }
     * })
     */
    upsert<T extends TravelHistoryUpsertArgs>(args: SelectSubset<T, TravelHistoryUpsertArgs<ExtArgs>>): Prisma__TravelHistoryClient<$Result.GetResult<Prisma.$TravelHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TravelHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelHistoryCountArgs} args - Arguments to filter TravelHistories to count.
     * @example
     * // Count the number of TravelHistories
     * const count = await prisma.travelHistory.count({
     *   where: {
     *     // ... the filter for the TravelHistories we want to count
     *   }
     * })
    **/
    count<T extends TravelHistoryCountArgs>(
      args?: Subset<T, TravelHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TravelHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TravelHistoryAggregateArgs>(args: Subset<T, TravelHistoryAggregateArgs>): Prisma.PrismaPromise<GetTravelHistoryAggregateType<T>>

    /**
     * Group by TravelHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TravelHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TravelHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TravelHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TravelHistory model
   */
  readonly fields: TravelHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TravelHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fromStation<T extends StationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StationDefaultArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toStation<T extends StationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StationDefaultArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TravelHistory model
   */
  interface TravelHistoryFieldRefs {
    readonly id: FieldRef<"TravelHistory", 'Int'>
    readonly userId: FieldRef<"TravelHistory", 'Int'>
    readonly fromStationId: FieldRef<"TravelHistory", 'Int'>
    readonly toStationId: FieldRef<"TravelHistory", 'Int'>
    readonly price: FieldRef<"TravelHistory", 'Int'>
    readonly traveledAt: FieldRef<"TravelHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TravelHistory findUnique
   */
  export type TravelHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelHistory
     */
    select?: TravelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelHistory
     */
    omit?: TravelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TravelHistory to fetch.
     */
    where: TravelHistoryWhereUniqueInput
  }

  /**
   * TravelHistory findUniqueOrThrow
   */
  export type TravelHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelHistory
     */
    select?: TravelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelHistory
     */
    omit?: TravelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TravelHistory to fetch.
     */
    where: TravelHistoryWhereUniqueInput
  }

  /**
   * TravelHistory findFirst
   */
  export type TravelHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelHistory
     */
    select?: TravelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelHistory
     */
    omit?: TravelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TravelHistory to fetch.
     */
    where?: TravelHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelHistories to fetch.
     */
    orderBy?: TravelHistoryOrderByWithRelationInput | TravelHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelHistories.
     */
    cursor?: TravelHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelHistories.
     */
    distinct?: TravelHistoryScalarFieldEnum | TravelHistoryScalarFieldEnum[]
  }

  /**
   * TravelHistory findFirstOrThrow
   */
  export type TravelHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelHistory
     */
    select?: TravelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelHistory
     */
    omit?: TravelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TravelHistory to fetch.
     */
    where?: TravelHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelHistories to fetch.
     */
    orderBy?: TravelHistoryOrderByWithRelationInput | TravelHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelHistories.
     */
    cursor?: TravelHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelHistories.
     */
    distinct?: TravelHistoryScalarFieldEnum | TravelHistoryScalarFieldEnum[]
  }

  /**
   * TravelHistory findMany
   */
  export type TravelHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelHistory
     */
    select?: TravelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelHistory
     */
    omit?: TravelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TravelHistories to fetch.
     */
    where?: TravelHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelHistories to fetch.
     */
    orderBy?: TravelHistoryOrderByWithRelationInput | TravelHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TravelHistories.
     */
    cursor?: TravelHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelHistories.
     */
    skip?: number
    distinct?: TravelHistoryScalarFieldEnum | TravelHistoryScalarFieldEnum[]
  }

  /**
   * TravelHistory create
   */
  export type TravelHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelHistory
     */
    select?: TravelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelHistory
     */
    omit?: TravelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TravelHistory.
     */
    data: XOR<TravelHistoryCreateInput, TravelHistoryUncheckedCreateInput>
  }

  /**
   * TravelHistory createMany
   */
  export type TravelHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TravelHistories.
     */
    data: TravelHistoryCreateManyInput | TravelHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TravelHistory update
   */
  export type TravelHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelHistory
     */
    select?: TravelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelHistory
     */
    omit?: TravelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TravelHistory.
     */
    data: XOR<TravelHistoryUpdateInput, TravelHistoryUncheckedUpdateInput>
    /**
     * Choose, which TravelHistory to update.
     */
    where: TravelHistoryWhereUniqueInput
  }

  /**
   * TravelHistory updateMany
   */
  export type TravelHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TravelHistories.
     */
    data: XOR<TravelHistoryUpdateManyMutationInput, TravelHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TravelHistories to update
     */
    where?: TravelHistoryWhereInput
    /**
     * Limit how many TravelHistories to update.
     */
    limit?: number
  }

  /**
   * TravelHistory upsert
   */
  export type TravelHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelHistory
     */
    select?: TravelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelHistory
     */
    omit?: TravelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TravelHistory to update in case it exists.
     */
    where: TravelHistoryWhereUniqueInput
    /**
     * In case the TravelHistory found by the `where` argument doesn't exist, create a new TravelHistory with this data.
     */
    create: XOR<TravelHistoryCreateInput, TravelHistoryUncheckedCreateInput>
    /**
     * In case the TravelHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelHistoryUpdateInput, TravelHistoryUncheckedUpdateInput>
  }

  /**
   * TravelHistory delete
   */
  export type TravelHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelHistory
     */
    select?: TravelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelHistory
     */
    omit?: TravelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelHistoryInclude<ExtArgs> | null
    /**
     * Filter which TravelHistory to delete.
     */
    where: TravelHistoryWhereUniqueInput
  }

  /**
   * TravelHistory deleteMany
   */
  export type TravelHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelHistories to delete
     */
    where?: TravelHistoryWhereInput
    /**
     * Limit how many TravelHistories to delete.
     */
    limit?: number
  }

  /**
   * TravelHistory without action
   */
  export type TravelHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelHistory
     */
    select?: TravelHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelHistory
     */
    omit?: TravelHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    fullname: 'fullname',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    line: 'line',
    position: 'position',
    fare: 'fare',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StationScalarFieldEnum = (typeof StationScalarFieldEnum)[keyof typeof StationScalarFieldEnum]


  export const TravelHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fromStationId: 'fromStationId',
    toStationId: 'toStationId',
    price: 'price',
    traveledAt: 'traveledAt'
  };

  export type TravelHistoryScalarFieldEnum = (typeof TravelHistoryScalarFieldEnum)[keyof typeof TravelHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    fullname: 'fullname'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const StationOrderByRelevanceFieldEnum: {
    name: 'name',
    line: 'line'
  };

  export type StationOrderByRelevanceFieldEnum = (typeof StationOrderByRelevanceFieldEnum)[keyof typeof StationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    fullname?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    travelHistories?: TravelHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    travelHistories?: TravelHistoryOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    fullname?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    travelHistories?: TravelHistoryListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    fullname?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StationWhereInput = {
    AND?: StationWhereInput | StationWhereInput[]
    OR?: StationWhereInput[]
    NOT?: StationWhereInput | StationWhereInput[]
    id?: IntFilter<"Station"> | number
    name?: StringFilter<"Station"> | string
    line?: StringFilter<"Station"> | string
    position?: IntFilter<"Station"> | number
    fare?: IntFilter<"Station"> | number
    createdAt?: DateTimeFilter<"Station"> | Date | string
    updatedAt?: DateTimeFilter<"Station"> | Date | string
    fromTravelHistories?: TravelHistoryListRelationFilter
    toTravelHistories?: TravelHistoryListRelationFilter
  }

  export type StationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    line?: SortOrder
    position?: SortOrder
    fare?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fromTravelHistories?: TravelHistoryOrderByRelationAggregateInput
    toTravelHistories?: TravelHistoryOrderByRelationAggregateInput
    _relevance?: StationOrderByRelevanceInput
  }

  export type StationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: StationWhereInput | StationWhereInput[]
    OR?: StationWhereInput[]
    NOT?: StationWhereInput | StationWhereInput[]
    line?: StringFilter<"Station"> | string
    position?: IntFilter<"Station"> | number
    fare?: IntFilter<"Station"> | number
    createdAt?: DateTimeFilter<"Station"> | Date | string
    updatedAt?: DateTimeFilter<"Station"> | Date | string
    fromTravelHistories?: TravelHistoryListRelationFilter
    toTravelHistories?: TravelHistoryListRelationFilter
  }, "id" | "name">

  export type StationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    line?: SortOrder
    position?: SortOrder
    fare?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StationCountOrderByAggregateInput
    _avg?: StationAvgOrderByAggregateInput
    _max?: StationMaxOrderByAggregateInput
    _min?: StationMinOrderByAggregateInput
    _sum?: StationSumOrderByAggregateInput
  }

  export type StationScalarWhereWithAggregatesInput = {
    AND?: StationScalarWhereWithAggregatesInput | StationScalarWhereWithAggregatesInput[]
    OR?: StationScalarWhereWithAggregatesInput[]
    NOT?: StationScalarWhereWithAggregatesInput | StationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Station"> | number
    name?: StringWithAggregatesFilter<"Station"> | string
    line?: StringWithAggregatesFilter<"Station"> | string
    position?: IntWithAggregatesFilter<"Station"> | number
    fare?: IntWithAggregatesFilter<"Station"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Station"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Station"> | Date | string
  }

  export type TravelHistoryWhereInput = {
    AND?: TravelHistoryWhereInput | TravelHistoryWhereInput[]
    OR?: TravelHistoryWhereInput[]
    NOT?: TravelHistoryWhereInput | TravelHistoryWhereInput[]
    id?: IntFilter<"TravelHistory"> | number
    userId?: IntFilter<"TravelHistory"> | number
    fromStationId?: IntFilter<"TravelHistory"> | number
    toStationId?: IntFilter<"TravelHistory"> | number
    price?: IntFilter<"TravelHistory"> | number
    traveledAt?: DateTimeFilter<"TravelHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    fromStation?: XOR<StationScalarRelationFilter, StationWhereInput>
    toStation?: XOR<StationScalarRelationFilter, StationWhereInput>
  }

  export type TravelHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fromStationId?: SortOrder
    toStationId?: SortOrder
    price?: SortOrder
    traveledAt?: SortOrder
    user?: UserOrderByWithRelationInput
    fromStation?: StationOrderByWithRelationInput
    toStation?: StationOrderByWithRelationInput
  }

  export type TravelHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TravelHistoryWhereInput | TravelHistoryWhereInput[]
    OR?: TravelHistoryWhereInput[]
    NOT?: TravelHistoryWhereInput | TravelHistoryWhereInput[]
    userId?: IntFilter<"TravelHistory"> | number
    fromStationId?: IntFilter<"TravelHistory"> | number
    toStationId?: IntFilter<"TravelHistory"> | number
    price?: IntFilter<"TravelHistory"> | number
    traveledAt?: DateTimeFilter<"TravelHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    fromStation?: XOR<StationScalarRelationFilter, StationWhereInput>
    toStation?: XOR<StationScalarRelationFilter, StationWhereInput>
  }, "id">

  export type TravelHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fromStationId?: SortOrder
    toStationId?: SortOrder
    price?: SortOrder
    traveledAt?: SortOrder
    _count?: TravelHistoryCountOrderByAggregateInput
    _avg?: TravelHistoryAvgOrderByAggregateInput
    _max?: TravelHistoryMaxOrderByAggregateInput
    _min?: TravelHistoryMinOrderByAggregateInput
    _sum?: TravelHistorySumOrderByAggregateInput
  }

  export type TravelHistoryScalarWhereWithAggregatesInput = {
    AND?: TravelHistoryScalarWhereWithAggregatesInput | TravelHistoryScalarWhereWithAggregatesInput[]
    OR?: TravelHistoryScalarWhereWithAggregatesInput[]
    NOT?: TravelHistoryScalarWhereWithAggregatesInput | TravelHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TravelHistory"> | number
    userId?: IntWithAggregatesFilter<"TravelHistory"> | number
    fromStationId?: IntWithAggregatesFilter<"TravelHistory"> | number
    toStationId?: IntWithAggregatesFilter<"TravelHistory"> | number
    price?: IntWithAggregatesFilter<"TravelHistory"> | number
    traveledAt?: DateTimeWithAggregatesFilter<"TravelHistory"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    fullname?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    travelHistories?: TravelHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    fullname?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    travelHistories?: TravelHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelHistories?: TravelHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelHistories?: TravelHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    fullname?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StationCreateInput = {
    name: string
    line: string
    position: number
    fare: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fromTravelHistories?: TravelHistoryCreateNestedManyWithoutFromStationInput
    toTravelHistories?: TravelHistoryCreateNestedManyWithoutToStationInput
  }

  export type StationUncheckedCreateInput = {
    id?: number
    name: string
    line: string
    position: number
    fare: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fromTravelHistories?: TravelHistoryUncheckedCreateNestedManyWithoutFromStationInput
    toTravelHistories?: TravelHistoryUncheckedCreateNestedManyWithoutToStationInput
  }

  export type StationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    fare?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromTravelHistories?: TravelHistoryUpdateManyWithoutFromStationNestedInput
    toTravelHistories?: TravelHistoryUpdateManyWithoutToStationNestedInput
  }

  export type StationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    fare?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromTravelHistories?: TravelHistoryUncheckedUpdateManyWithoutFromStationNestedInput
    toTravelHistories?: TravelHistoryUncheckedUpdateManyWithoutToStationNestedInput
  }

  export type StationCreateManyInput = {
    id?: number
    name: string
    line: string
    position: number
    fare: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    fare?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    fare?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelHistoryCreateInput = {
    price: number
    traveledAt?: Date | string
    user: UserCreateNestedOneWithoutTravelHistoriesInput
    fromStation: StationCreateNestedOneWithoutFromTravelHistoriesInput
    toStation: StationCreateNestedOneWithoutToTravelHistoriesInput
  }

  export type TravelHistoryUncheckedCreateInput = {
    id?: number
    userId: number
    fromStationId: number
    toStationId: number
    price: number
    traveledAt?: Date | string
  }

  export type TravelHistoryUpdateInput = {
    price?: IntFieldUpdateOperationsInput | number
    traveledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTravelHistoriesNestedInput
    fromStation?: StationUpdateOneRequiredWithoutFromTravelHistoriesNestedInput
    toStation?: StationUpdateOneRequiredWithoutToTravelHistoriesNestedInput
  }

  export type TravelHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fromStationId?: IntFieldUpdateOperationsInput | number
    toStationId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    traveledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelHistoryCreateManyInput = {
    id?: number
    userId: number
    fromStationId: number
    toStationId: number
    price: number
    traveledAt?: Date | string
  }

  export type TravelHistoryUpdateManyMutationInput = {
    price?: IntFieldUpdateOperationsInput | number
    traveledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fromStationId?: IntFieldUpdateOperationsInput | number
    toStationId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    traveledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TravelHistoryListRelationFilter = {
    every?: TravelHistoryWhereInput
    some?: TravelHistoryWhereInput
    none?: TravelHistoryWhereInput
  }

  export type TravelHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullname?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StationOrderByRelevanceInput = {
    fields: StationOrderByRelevanceFieldEnum | StationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    line?: SortOrder
    position?: SortOrder
    fare?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StationAvgOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    fare?: SortOrder
  }

  export type StationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    line?: SortOrder
    position?: SortOrder
    fare?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    line?: SortOrder
    position?: SortOrder
    fare?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StationSumOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    fare?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StationScalarRelationFilter = {
    is?: StationWhereInput
    isNot?: StationWhereInput
  }

  export type TravelHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fromStationId?: SortOrder
    toStationId?: SortOrder
    price?: SortOrder
    traveledAt?: SortOrder
  }

  export type TravelHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fromStationId?: SortOrder
    toStationId?: SortOrder
    price?: SortOrder
  }

  export type TravelHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fromStationId?: SortOrder
    toStationId?: SortOrder
    price?: SortOrder
    traveledAt?: SortOrder
  }

  export type TravelHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fromStationId?: SortOrder
    toStationId?: SortOrder
    price?: SortOrder
    traveledAt?: SortOrder
  }

  export type TravelHistorySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fromStationId?: SortOrder
    toStationId?: SortOrder
    price?: SortOrder
  }

  export type TravelHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<TravelHistoryCreateWithoutUserInput, TravelHistoryUncheckedCreateWithoutUserInput> | TravelHistoryCreateWithoutUserInput[] | TravelHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelHistoryCreateOrConnectWithoutUserInput | TravelHistoryCreateOrConnectWithoutUserInput[]
    createMany?: TravelHistoryCreateManyUserInputEnvelope
    connect?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
  }

  export type TravelHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TravelHistoryCreateWithoutUserInput, TravelHistoryUncheckedCreateWithoutUserInput> | TravelHistoryCreateWithoutUserInput[] | TravelHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelHistoryCreateOrConnectWithoutUserInput | TravelHistoryCreateOrConnectWithoutUserInput[]
    createMany?: TravelHistoryCreateManyUserInputEnvelope
    connect?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TravelHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<TravelHistoryCreateWithoutUserInput, TravelHistoryUncheckedCreateWithoutUserInput> | TravelHistoryCreateWithoutUserInput[] | TravelHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelHistoryCreateOrConnectWithoutUserInput | TravelHistoryCreateOrConnectWithoutUserInput[]
    upsert?: TravelHistoryUpsertWithWhereUniqueWithoutUserInput | TravelHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TravelHistoryCreateManyUserInputEnvelope
    set?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    disconnect?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    delete?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    connect?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    update?: TravelHistoryUpdateWithWhereUniqueWithoutUserInput | TravelHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TravelHistoryUpdateManyWithWhereWithoutUserInput | TravelHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TravelHistoryScalarWhereInput | TravelHistoryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TravelHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TravelHistoryCreateWithoutUserInput, TravelHistoryUncheckedCreateWithoutUserInput> | TravelHistoryCreateWithoutUserInput[] | TravelHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TravelHistoryCreateOrConnectWithoutUserInput | TravelHistoryCreateOrConnectWithoutUserInput[]
    upsert?: TravelHistoryUpsertWithWhereUniqueWithoutUserInput | TravelHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TravelHistoryCreateManyUserInputEnvelope
    set?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    disconnect?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    delete?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    connect?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    update?: TravelHistoryUpdateWithWhereUniqueWithoutUserInput | TravelHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TravelHistoryUpdateManyWithWhereWithoutUserInput | TravelHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TravelHistoryScalarWhereInput | TravelHistoryScalarWhereInput[]
  }

  export type TravelHistoryCreateNestedManyWithoutFromStationInput = {
    create?: XOR<TravelHistoryCreateWithoutFromStationInput, TravelHistoryUncheckedCreateWithoutFromStationInput> | TravelHistoryCreateWithoutFromStationInput[] | TravelHistoryUncheckedCreateWithoutFromStationInput[]
    connectOrCreate?: TravelHistoryCreateOrConnectWithoutFromStationInput | TravelHistoryCreateOrConnectWithoutFromStationInput[]
    createMany?: TravelHistoryCreateManyFromStationInputEnvelope
    connect?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
  }

  export type TravelHistoryCreateNestedManyWithoutToStationInput = {
    create?: XOR<TravelHistoryCreateWithoutToStationInput, TravelHistoryUncheckedCreateWithoutToStationInput> | TravelHistoryCreateWithoutToStationInput[] | TravelHistoryUncheckedCreateWithoutToStationInput[]
    connectOrCreate?: TravelHistoryCreateOrConnectWithoutToStationInput | TravelHistoryCreateOrConnectWithoutToStationInput[]
    createMany?: TravelHistoryCreateManyToStationInputEnvelope
    connect?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
  }

  export type TravelHistoryUncheckedCreateNestedManyWithoutFromStationInput = {
    create?: XOR<TravelHistoryCreateWithoutFromStationInput, TravelHistoryUncheckedCreateWithoutFromStationInput> | TravelHistoryCreateWithoutFromStationInput[] | TravelHistoryUncheckedCreateWithoutFromStationInput[]
    connectOrCreate?: TravelHistoryCreateOrConnectWithoutFromStationInput | TravelHistoryCreateOrConnectWithoutFromStationInput[]
    createMany?: TravelHistoryCreateManyFromStationInputEnvelope
    connect?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
  }

  export type TravelHistoryUncheckedCreateNestedManyWithoutToStationInput = {
    create?: XOR<TravelHistoryCreateWithoutToStationInput, TravelHistoryUncheckedCreateWithoutToStationInput> | TravelHistoryCreateWithoutToStationInput[] | TravelHistoryUncheckedCreateWithoutToStationInput[]
    connectOrCreate?: TravelHistoryCreateOrConnectWithoutToStationInput | TravelHistoryCreateOrConnectWithoutToStationInput[]
    createMany?: TravelHistoryCreateManyToStationInputEnvelope
    connect?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
  }

  export type TravelHistoryUpdateManyWithoutFromStationNestedInput = {
    create?: XOR<TravelHistoryCreateWithoutFromStationInput, TravelHistoryUncheckedCreateWithoutFromStationInput> | TravelHistoryCreateWithoutFromStationInput[] | TravelHistoryUncheckedCreateWithoutFromStationInput[]
    connectOrCreate?: TravelHistoryCreateOrConnectWithoutFromStationInput | TravelHistoryCreateOrConnectWithoutFromStationInput[]
    upsert?: TravelHistoryUpsertWithWhereUniqueWithoutFromStationInput | TravelHistoryUpsertWithWhereUniqueWithoutFromStationInput[]
    createMany?: TravelHistoryCreateManyFromStationInputEnvelope
    set?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    disconnect?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    delete?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    connect?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    update?: TravelHistoryUpdateWithWhereUniqueWithoutFromStationInput | TravelHistoryUpdateWithWhereUniqueWithoutFromStationInput[]
    updateMany?: TravelHistoryUpdateManyWithWhereWithoutFromStationInput | TravelHistoryUpdateManyWithWhereWithoutFromStationInput[]
    deleteMany?: TravelHistoryScalarWhereInput | TravelHistoryScalarWhereInput[]
  }

  export type TravelHistoryUpdateManyWithoutToStationNestedInput = {
    create?: XOR<TravelHistoryCreateWithoutToStationInput, TravelHistoryUncheckedCreateWithoutToStationInput> | TravelHistoryCreateWithoutToStationInput[] | TravelHistoryUncheckedCreateWithoutToStationInput[]
    connectOrCreate?: TravelHistoryCreateOrConnectWithoutToStationInput | TravelHistoryCreateOrConnectWithoutToStationInput[]
    upsert?: TravelHistoryUpsertWithWhereUniqueWithoutToStationInput | TravelHistoryUpsertWithWhereUniqueWithoutToStationInput[]
    createMany?: TravelHistoryCreateManyToStationInputEnvelope
    set?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    disconnect?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    delete?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    connect?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    update?: TravelHistoryUpdateWithWhereUniqueWithoutToStationInput | TravelHistoryUpdateWithWhereUniqueWithoutToStationInput[]
    updateMany?: TravelHistoryUpdateManyWithWhereWithoutToStationInput | TravelHistoryUpdateManyWithWhereWithoutToStationInput[]
    deleteMany?: TravelHistoryScalarWhereInput | TravelHistoryScalarWhereInput[]
  }

  export type TravelHistoryUncheckedUpdateManyWithoutFromStationNestedInput = {
    create?: XOR<TravelHistoryCreateWithoutFromStationInput, TravelHistoryUncheckedCreateWithoutFromStationInput> | TravelHistoryCreateWithoutFromStationInput[] | TravelHistoryUncheckedCreateWithoutFromStationInput[]
    connectOrCreate?: TravelHistoryCreateOrConnectWithoutFromStationInput | TravelHistoryCreateOrConnectWithoutFromStationInput[]
    upsert?: TravelHistoryUpsertWithWhereUniqueWithoutFromStationInput | TravelHistoryUpsertWithWhereUniqueWithoutFromStationInput[]
    createMany?: TravelHistoryCreateManyFromStationInputEnvelope
    set?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    disconnect?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    delete?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    connect?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    update?: TravelHistoryUpdateWithWhereUniqueWithoutFromStationInput | TravelHistoryUpdateWithWhereUniqueWithoutFromStationInput[]
    updateMany?: TravelHistoryUpdateManyWithWhereWithoutFromStationInput | TravelHistoryUpdateManyWithWhereWithoutFromStationInput[]
    deleteMany?: TravelHistoryScalarWhereInput | TravelHistoryScalarWhereInput[]
  }

  export type TravelHistoryUncheckedUpdateManyWithoutToStationNestedInput = {
    create?: XOR<TravelHistoryCreateWithoutToStationInput, TravelHistoryUncheckedCreateWithoutToStationInput> | TravelHistoryCreateWithoutToStationInput[] | TravelHistoryUncheckedCreateWithoutToStationInput[]
    connectOrCreate?: TravelHistoryCreateOrConnectWithoutToStationInput | TravelHistoryCreateOrConnectWithoutToStationInput[]
    upsert?: TravelHistoryUpsertWithWhereUniqueWithoutToStationInput | TravelHistoryUpsertWithWhereUniqueWithoutToStationInput[]
    createMany?: TravelHistoryCreateManyToStationInputEnvelope
    set?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    disconnect?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    delete?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    connect?: TravelHistoryWhereUniqueInput | TravelHistoryWhereUniqueInput[]
    update?: TravelHistoryUpdateWithWhereUniqueWithoutToStationInput | TravelHistoryUpdateWithWhereUniqueWithoutToStationInput[]
    updateMany?: TravelHistoryUpdateManyWithWhereWithoutToStationInput | TravelHistoryUpdateManyWithWhereWithoutToStationInput[]
    deleteMany?: TravelHistoryScalarWhereInput | TravelHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTravelHistoriesInput = {
    create?: XOR<UserCreateWithoutTravelHistoriesInput, UserUncheckedCreateWithoutTravelHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTravelHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type StationCreateNestedOneWithoutFromTravelHistoriesInput = {
    create?: XOR<StationCreateWithoutFromTravelHistoriesInput, StationUncheckedCreateWithoutFromTravelHistoriesInput>
    connectOrCreate?: StationCreateOrConnectWithoutFromTravelHistoriesInput
    connect?: StationWhereUniqueInput
  }

  export type StationCreateNestedOneWithoutToTravelHistoriesInput = {
    create?: XOR<StationCreateWithoutToTravelHistoriesInput, StationUncheckedCreateWithoutToTravelHistoriesInput>
    connectOrCreate?: StationCreateOrConnectWithoutToTravelHistoriesInput
    connect?: StationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTravelHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutTravelHistoriesInput, UserUncheckedCreateWithoutTravelHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTravelHistoriesInput
    upsert?: UserUpsertWithoutTravelHistoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTravelHistoriesInput, UserUpdateWithoutTravelHistoriesInput>, UserUncheckedUpdateWithoutTravelHistoriesInput>
  }

  export type StationUpdateOneRequiredWithoutFromTravelHistoriesNestedInput = {
    create?: XOR<StationCreateWithoutFromTravelHistoriesInput, StationUncheckedCreateWithoutFromTravelHistoriesInput>
    connectOrCreate?: StationCreateOrConnectWithoutFromTravelHistoriesInput
    upsert?: StationUpsertWithoutFromTravelHistoriesInput
    connect?: StationWhereUniqueInput
    update?: XOR<XOR<StationUpdateToOneWithWhereWithoutFromTravelHistoriesInput, StationUpdateWithoutFromTravelHistoriesInput>, StationUncheckedUpdateWithoutFromTravelHistoriesInput>
  }

  export type StationUpdateOneRequiredWithoutToTravelHistoriesNestedInput = {
    create?: XOR<StationCreateWithoutToTravelHistoriesInput, StationUncheckedCreateWithoutToTravelHistoriesInput>
    connectOrCreate?: StationCreateOrConnectWithoutToTravelHistoriesInput
    upsert?: StationUpsertWithoutToTravelHistoriesInput
    connect?: StationWhereUniqueInput
    update?: XOR<XOR<StationUpdateToOneWithWhereWithoutToTravelHistoriesInput, StationUpdateWithoutToTravelHistoriesInput>, StationUncheckedUpdateWithoutToTravelHistoriesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TravelHistoryCreateWithoutUserInput = {
    price: number
    traveledAt?: Date | string
    fromStation: StationCreateNestedOneWithoutFromTravelHistoriesInput
    toStation: StationCreateNestedOneWithoutToTravelHistoriesInput
  }

  export type TravelHistoryUncheckedCreateWithoutUserInput = {
    id?: number
    fromStationId: number
    toStationId: number
    price: number
    traveledAt?: Date | string
  }

  export type TravelHistoryCreateOrConnectWithoutUserInput = {
    where: TravelHistoryWhereUniqueInput
    create: XOR<TravelHistoryCreateWithoutUserInput, TravelHistoryUncheckedCreateWithoutUserInput>
  }

  export type TravelHistoryCreateManyUserInputEnvelope = {
    data: TravelHistoryCreateManyUserInput | TravelHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TravelHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: TravelHistoryWhereUniqueInput
    update: XOR<TravelHistoryUpdateWithoutUserInput, TravelHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<TravelHistoryCreateWithoutUserInput, TravelHistoryUncheckedCreateWithoutUserInput>
  }

  export type TravelHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: TravelHistoryWhereUniqueInput
    data: XOR<TravelHistoryUpdateWithoutUserInput, TravelHistoryUncheckedUpdateWithoutUserInput>
  }

  export type TravelHistoryUpdateManyWithWhereWithoutUserInput = {
    where: TravelHistoryScalarWhereInput
    data: XOR<TravelHistoryUpdateManyMutationInput, TravelHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type TravelHistoryScalarWhereInput = {
    AND?: TravelHistoryScalarWhereInput | TravelHistoryScalarWhereInput[]
    OR?: TravelHistoryScalarWhereInput[]
    NOT?: TravelHistoryScalarWhereInput | TravelHistoryScalarWhereInput[]
    id?: IntFilter<"TravelHistory"> | number
    userId?: IntFilter<"TravelHistory"> | number
    fromStationId?: IntFilter<"TravelHistory"> | number
    toStationId?: IntFilter<"TravelHistory"> | number
    price?: IntFilter<"TravelHistory"> | number
    traveledAt?: DateTimeFilter<"TravelHistory"> | Date | string
  }

  export type TravelHistoryCreateWithoutFromStationInput = {
    price: number
    traveledAt?: Date | string
    user: UserCreateNestedOneWithoutTravelHistoriesInput
    toStation: StationCreateNestedOneWithoutToTravelHistoriesInput
  }

  export type TravelHistoryUncheckedCreateWithoutFromStationInput = {
    id?: number
    userId: number
    toStationId: number
    price: number
    traveledAt?: Date | string
  }

  export type TravelHistoryCreateOrConnectWithoutFromStationInput = {
    where: TravelHistoryWhereUniqueInput
    create: XOR<TravelHistoryCreateWithoutFromStationInput, TravelHistoryUncheckedCreateWithoutFromStationInput>
  }

  export type TravelHistoryCreateManyFromStationInputEnvelope = {
    data: TravelHistoryCreateManyFromStationInput | TravelHistoryCreateManyFromStationInput[]
    skipDuplicates?: boolean
  }

  export type TravelHistoryCreateWithoutToStationInput = {
    price: number
    traveledAt?: Date | string
    user: UserCreateNestedOneWithoutTravelHistoriesInput
    fromStation: StationCreateNestedOneWithoutFromTravelHistoriesInput
  }

  export type TravelHistoryUncheckedCreateWithoutToStationInput = {
    id?: number
    userId: number
    fromStationId: number
    price: number
    traveledAt?: Date | string
  }

  export type TravelHistoryCreateOrConnectWithoutToStationInput = {
    where: TravelHistoryWhereUniqueInput
    create: XOR<TravelHistoryCreateWithoutToStationInput, TravelHistoryUncheckedCreateWithoutToStationInput>
  }

  export type TravelHistoryCreateManyToStationInputEnvelope = {
    data: TravelHistoryCreateManyToStationInput | TravelHistoryCreateManyToStationInput[]
    skipDuplicates?: boolean
  }

  export type TravelHistoryUpsertWithWhereUniqueWithoutFromStationInput = {
    where: TravelHistoryWhereUniqueInput
    update: XOR<TravelHistoryUpdateWithoutFromStationInput, TravelHistoryUncheckedUpdateWithoutFromStationInput>
    create: XOR<TravelHistoryCreateWithoutFromStationInput, TravelHistoryUncheckedCreateWithoutFromStationInput>
  }

  export type TravelHistoryUpdateWithWhereUniqueWithoutFromStationInput = {
    where: TravelHistoryWhereUniqueInput
    data: XOR<TravelHistoryUpdateWithoutFromStationInput, TravelHistoryUncheckedUpdateWithoutFromStationInput>
  }

  export type TravelHistoryUpdateManyWithWhereWithoutFromStationInput = {
    where: TravelHistoryScalarWhereInput
    data: XOR<TravelHistoryUpdateManyMutationInput, TravelHistoryUncheckedUpdateManyWithoutFromStationInput>
  }

  export type TravelHistoryUpsertWithWhereUniqueWithoutToStationInput = {
    where: TravelHistoryWhereUniqueInput
    update: XOR<TravelHistoryUpdateWithoutToStationInput, TravelHistoryUncheckedUpdateWithoutToStationInput>
    create: XOR<TravelHistoryCreateWithoutToStationInput, TravelHistoryUncheckedCreateWithoutToStationInput>
  }

  export type TravelHistoryUpdateWithWhereUniqueWithoutToStationInput = {
    where: TravelHistoryWhereUniqueInput
    data: XOR<TravelHistoryUpdateWithoutToStationInput, TravelHistoryUncheckedUpdateWithoutToStationInput>
  }

  export type TravelHistoryUpdateManyWithWhereWithoutToStationInput = {
    where: TravelHistoryScalarWhereInput
    data: XOR<TravelHistoryUpdateManyMutationInput, TravelHistoryUncheckedUpdateManyWithoutToStationInput>
  }

  export type UserCreateWithoutTravelHistoriesInput = {
    email: string
    password: string
    fullname?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutTravelHistoriesInput = {
    id?: number
    email: string
    password: string
    fullname?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutTravelHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTravelHistoriesInput, UserUncheckedCreateWithoutTravelHistoriesInput>
  }

  export type StationCreateWithoutFromTravelHistoriesInput = {
    name: string
    line: string
    position: number
    fare: number
    createdAt?: Date | string
    updatedAt?: Date | string
    toTravelHistories?: TravelHistoryCreateNestedManyWithoutToStationInput
  }

  export type StationUncheckedCreateWithoutFromTravelHistoriesInput = {
    id?: number
    name: string
    line: string
    position: number
    fare: number
    createdAt?: Date | string
    updatedAt?: Date | string
    toTravelHistories?: TravelHistoryUncheckedCreateNestedManyWithoutToStationInput
  }

  export type StationCreateOrConnectWithoutFromTravelHistoriesInput = {
    where: StationWhereUniqueInput
    create: XOR<StationCreateWithoutFromTravelHistoriesInput, StationUncheckedCreateWithoutFromTravelHistoriesInput>
  }

  export type StationCreateWithoutToTravelHistoriesInput = {
    name: string
    line: string
    position: number
    fare: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fromTravelHistories?: TravelHistoryCreateNestedManyWithoutFromStationInput
  }

  export type StationUncheckedCreateWithoutToTravelHistoriesInput = {
    id?: number
    name: string
    line: string
    position: number
    fare: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fromTravelHistories?: TravelHistoryUncheckedCreateNestedManyWithoutFromStationInput
  }

  export type StationCreateOrConnectWithoutToTravelHistoriesInput = {
    where: StationWhereUniqueInput
    create: XOR<StationCreateWithoutToTravelHistoriesInput, StationUncheckedCreateWithoutToTravelHistoriesInput>
  }

  export type UserUpsertWithoutTravelHistoriesInput = {
    update: XOR<UserUpdateWithoutTravelHistoriesInput, UserUncheckedUpdateWithoutTravelHistoriesInput>
    create: XOR<UserCreateWithoutTravelHistoriesInput, UserUncheckedCreateWithoutTravelHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTravelHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTravelHistoriesInput, UserUncheckedUpdateWithoutTravelHistoriesInput>
  }

  export type UserUpdateWithoutTravelHistoriesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutTravelHistoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StationUpsertWithoutFromTravelHistoriesInput = {
    update: XOR<StationUpdateWithoutFromTravelHistoriesInput, StationUncheckedUpdateWithoutFromTravelHistoriesInput>
    create: XOR<StationCreateWithoutFromTravelHistoriesInput, StationUncheckedCreateWithoutFromTravelHistoriesInput>
    where?: StationWhereInput
  }

  export type StationUpdateToOneWithWhereWithoutFromTravelHistoriesInput = {
    where?: StationWhereInput
    data: XOR<StationUpdateWithoutFromTravelHistoriesInput, StationUncheckedUpdateWithoutFromTravelHistoriesInput>
  }

  export type StationUpdateWithoutFromTravelHistoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    fare?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toTravelHistories?: TravelHistoryUpdateManyWithoutToStationNestedInput
  }

  export type StationUncheckedUpdateWithoutFromTravelHistoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    fare?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toTravelHistories?: TravelHistoryUncheckedUpdateManyWithoutToStationNestedInput
  }

  export type StationUpsertWithoutToTravelHistoriesInput = {
    update: XOR<StationUpdateWithoutToTravelHistoriesInput, StationUncheckedUpdateWithoutToTravelHistoriesInput>
    create: XOR<StationCreateWithoutToTravelHistoriesInput, StationUncheckedCreateWithoutToTravelHistoriesInput>
    where?: StationWhereInput
  }

  export type StationUpdateToOneWithWhereWithoutToTravelHistoriesInput = {
    where?: StationWhereInput
    data: XOR<StationUpdateWithoutToTravelHistoriesInput, StationUncheckedUpdateWithoutToTravelHistoriesInput>
  }

  export type StationUpdateWithoutToTravelHistoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    fare?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromTravelHistories?: TravelHistoryUpdateManyWithoutFromStationNestedInput
  }

  export type StationUncheckedUpdateWithoutToTravelHistoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    fare?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromTravelHistories?: TravelHistoryUncheckedUpdateManyWithoutFromStationNestedInput
  }

  export type TravelHistoryCreateManyUserInput = {
    id?: number
    fromStationId: number
    toStationId: number
    price: number
    traveledAt?: Date | string
  }

  export type TravelHistoryUpdateWithoutUserInput = {
    price?: IntFieldUpdateOperationsInput | number
    traveledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromStation?: StationUpdateOneRequiredWithoutFromTravelHistoriesNestedInput
    toStation?: StationUpdateOneRequiredWithoutToTravelHistoriesNestedInput
  }

  export type TravelHistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromStationId?: IntFieldUpdateOperationsInput | number
    toStationId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    traveledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromStationId?: IntFieldUpdateOperationsInput | number
    toStationId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    traveledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelHistoryCreateManyFromStationInput = {
    id?: number
    userId: number
    toStationId: number
    price: number
    traveledAt?: Date | string
  }

  export type TravelHistoryCreateManyToStationInput = {
    id?: number
    userId: number
    fromStationId: number
    price: number
    traveledAt?: Date | string
  }

  export type TravelHistoryUpdateWithoutFromStationInput = {
    price?: IntFieldUpdateOperationsInput | number
    traveledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTravelHistoriesNestedInput
    toStation?: StationUpdateOneRequiredWithoutToTravelHistoriesNestedInput
  }

  export type TravelHistoryUncheckedUpdateWithoutFromStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    toStationId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    traveledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelHistoryUncheckedUpdateManyWithoutFromStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    toStationId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    traveledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelHistoryUpdateWithoutToStationInput = {
    price?: IntFieldUpdateOperationsInput | number
    traveledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTravelHistoriesNestedInput
    fromStation?: StationUpdateOneRequiredWithoutFromTravelHistoriesNestedInput
  }

  export type TravelHistoryUncheckedUpdateWithoutToStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fromStationId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    traveledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelHistoryUncheckedUpdateManyWithoutToStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fromStationId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    traveledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}