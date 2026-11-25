
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
 * Model emotionscore
 * 
 */
export type emotionscore = $Result.DefaultSelection<Prisma.$emotionscorePayload>
/**
 * Model meeting
 * 
 */
export type meeting = $Result.DefaultSelection<Prisma.$meetingPayload>
/**
 * Model note
 * 
 */
export type note = $Result.DefaultSelection<Prisma.$notePayload>
/**
 * Model participant
 * 
 */
export type participant = $Result.DefaultSelection<Prisma.$participantPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Emotionscores
 * const emotionscores = await prisma.emotionscore.findMany()
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
   * // Fetch zero or more Emotionscores
   * const emotionscores = await prisma.emotionscore.findMany()
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
   * `prisma.emotionscore`: Exposes CRUD operations for the **emotionscore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emotionscores
    * const emotionscores = await prisma.emotionscore.findMany()
    * ```
    */
  get emotionscore(): Prisma.emotionscoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meeting`: Exposes CRUD operations for the **meeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetings
    * const meetings = await prisma.meeting.findMany()
    * ```
    */
  get meeting(): Prisma.meetingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.noteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participant`: Exposes CRUD operations for the **participant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participants
    * const participants = await prisma.participant.findMany()
    * ```
    */
  get participant(): Prisma.participantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    emotionscore: 'emotionscore',
    meeting: 'meeting',
    note: 'note',
    participant: 'participant',
    user: 'user'
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
      modelProps: "emotionscore" | "meeting" | "note" | "participant" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      emotionscore: {
        payload: Prisma.$emotionscorePayload<ExtArgs>
        fields: Prisma.emotionscoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.emotionscoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emotionscorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.emotionscoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emotionscorePayload>
          }
          findFirst: {
            args: Prisma.emotionscoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emotionscorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.emotionscoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emotionscorePayload>
          }
          findMany: {
            args: Prisma.emotionscoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emotionscorePayload>[]
          }
          create: {
            args: Prisma.emotionscoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emotionscorePayload>
          }
          createMany: {
            args: Prisma.emotionscoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.emotionscoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emotionscorePayload>
          }
          update: {
            args: Prisma.emotionscoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emotionscorePayload>
          }
          deleteMany: {
            args: Prisma.emotionscoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.emotionscoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.emotionscoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emotionscorePayload>
          }
          aggregate: {
            args: Prisma.EmotionscoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmotionscore>
          }
          groupBy: {
            args: Prisma.emotionscoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmotionscoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.emotionscoreCountArgs<ExtArgs>
            result: $Utils.Optional<EmotionscoreCountAggregateOutputType> | number
          }
        }
      }
      meeting: {
        payload: Prisma.$meetingPayload<ExtArgs>
        fields: Prisma.meetingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.meetingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.meetingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingPayload>
          }
          findFirst: {
            args: Prisma.meetingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.meetingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingPayload>
          }
          findMany: {
            args: Prisma.meetingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingPayload>[]
          }
          create: {
            args: Prisma.meetingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingPayload>
          }
          createMany: {
            args: Prisma.meetingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.meetingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingPayload>
          }
          update: {
            args: Prisma.meetingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingPayload>
          }
          deleteMany: {
            args: Prisma.meetingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.meetingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.meetingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingPayload>
          }
          aggregate: {
            args: Prisma.MeetingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeeting>
          }
          groupBy: {
            args: Prisma.meetingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingGroupByOutputType>[]
          }
          count: {
            args: Prisma.meetingCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingCountAggregateOutputType> | number
          }
        }
      }
      note: {
        payload: Prisma.$notePayload<ExtArgs>
        fields: Prisma.noteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.noteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.noteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notePayload>
          }
          findFirst: {
            args: Prisma.noteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.noteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notePayload>
          }
          findMany: {
            args: Prisma.noteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notePayload>[]
          }
          create: {
            args: Prisma.noteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notePayload>
          }
          createMany: {
            args: Prisma.noteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.noteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notePayload>
          }
          update: {
            args: Prisma.noteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notePayload>
          }
          deleteMany: {
            args: Prisma.noteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.noteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.noteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.noteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.noteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
      participant: {
        payload: Prisma.$participantPayload<ExtArgs>
        fields: Prisma.participantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.participantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.participantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantPayload>
          }
          findFirst: {
            args: Prisma.participantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.participantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantPayload>
          }
          findMany: {
            args: Prisma.participantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantPayload>[]
          }
          create: {
            args: Prisma.participantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantPayload>
          }
          createMany: {
            args: Prisma.participantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.participantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantPayload>
          }
          update: {
            args: Prisma.participantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantPayload>
          }
          deleteMany: {
            args: Prisma.participantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.participantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.participantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantPayload>
          }
          aggregate: {
            args: Prisma.ParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipant>
          }
          groupBy: {
            args: Prisma.participantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.participantCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
    emotionscore?: emotionscoreOmit
    meeting?: meetingOmit
    note?: noteOmit
    participant?: participantOmit
    user?: userOmit
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
   * Count Type EmotionscoreCountOutputType
   */

  export type EmotionscoreCountOutputType = {
    note: number
  }

  export type EmotionscoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | EmotionscoreCountOutputTypeCountNoteArgs
  }

  // Custom InputTypes
  /**
   * EmotionscoreCountOutputType without action
   */
  export type EmotionscoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmotionscoreCountOutputType
     */
    select?: EmotionscoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmotionscoreCountOutputType without action
   */
  export type EmotionscoreCountOutputTypeCountNoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: noteWhereInput
  }


  /**
   * Count Type MeetingCountOutputType
   */

  export type MeetingCountOutputType = {
    emotionscore: number
    note: number
    participant: number
  }

  export type MeetingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emotionscore?: boolean | MeetingCountOutputTypeCountEmotionscoreArgs
    note?: boolean | MeetingCountOutputTypeCountNoteArgs
    participant?: boolean | MeetingCountOutputTypeCountParticipantArgs
  }

  // Custom InputTypes
  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingCountOutputType
     */
    select?: MeetingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeCountEmotionscoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: emotionscoreWhereInput
  }

  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeCountNoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: noteWhereInput
  }

  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeCountParticipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: participantWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    participant: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | UserCountOutputTypeCountParticipantArgs
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
  export type UserCountOutputTypeCountParticipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: participantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model emotionscore
   */

  export type AggregateEmotionscore = {
    _count: EmotionscoreCountAggregateOutputType | null
    _avg: EmotionscoreAvgAggregateOutputType | null
    _sum: EmotionscoreSumAggregateOutputType | null
    _min: EmotionscoreMinAggregateOutputType | null
    _max: EmotionscoreMaxAggregateOutputType | null
  }

  export type EmotionscoreAvgAggregateOutputType = {
    score: number | null
  }

  export type EmotionscoreSumAggregateOutputType = {
    score: number | null
  }

  export type EmotionscoreMinAggregateOutputType = {
    id: string | null
    meeting_id: string | null
    created_at: Date | null
    score: number | null
  }

  export type EmotionscoreMaxAggregateOutputType = {
    id: string | null
    meeting_id: string | null
    created_at: Date | null
    score: number | null
  }

  export type EmotionscoreCountAggregateOutputType = {
    id: number
    meeting_id: number
    created_at: number
    score: number
    _all: number
  }


  export type EmotionscoreAvgAggregateInputType = {
    score?: true
  }

  export type EmotionscoreSumAggregateInputType = {
    score?: true
  }

  export type EmotionscoreMinAggregateInputType = {
    id?: true
    meeting_id?: true
    created_at?: true
    score?: true
  }

  export type EmotionscoreMaxAggregateInputType = {
    id?: true
    meeting_id?: true
    created_at?: true
    score?: true
  }

  export type EmotionscoreCountAggregateInputType = {
    id?: true
    meeting_id?: true
    created_at?: true
    score?: true
    _all?: true
  }

  export type EmotionscoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which emotionscore to aggregate.
     */
    where?: emotionscoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emotionscores to fetch.
     */
    orderBy?: emotionscoreOrderByWithRelationInput | emotionscoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: emotionscoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emotionscores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emotionscores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned emotionscores
    **/
    _count?: true | EmotionscoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmotionscoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmotionscoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmotionscoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmotionscoreMaxAggregateInputType
  }

  export type GetEmotionscoreAggregateType<T extends EmotionscoreAggregateArgs> = {
        [P in keyof T & keyof AggregateEmotionscore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmotionscore[P]>
      : GetScalarType<T[P], AggregateEmotionscore[P]>
  }




  export type emotionscoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: emotionscoreWhereInput
    orderBy?: emotionscoreOrderByWithAggregationInput | emotionscoreOrderByWithAggregationInput[]
    by: EmotionscoreScalarFieldEnum[] | EmotionscoreScalarFieldEnum
    having?: emotionscoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmotionscoreCountAggregateInputType | true
    _avg?: EmotionscoreAvgAggregateInputType
    _sum?: EmotionscoreSumAggregateInputType
    _min?: EmotionscoreMinAggregateInputType
    _max?: EmotionscoreMaxAggregateInputType
  }

  export type EmotionscoreGroupByOutputType = {
    id: string
    meeting_id: string
    created_at: Date
    score: number
    _count: EmotionscoreCountAggregateOutputType | null
    _avg: EmotionscoreAvgAggregateOutputType | null
    _sum: EmotionscoreSumAggregateOutputType | null
    _min: EmotionscoreMinAggregateOutputType | null
    _max: EmotionscoreMaxAggregateOutputType | null
  }

  type GetEmotionscoreGroupByPayload<T extends emotionscoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmotionscoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmotionscoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmotionscoreGroupByOutputType[P]>
            : GetScalarType<T[P], EmotionscoreGroupByOutputType[P]>
        }
      >
    >


  export type emotionscoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meeting_id?: boolean
    created_at?: boolean
    score?: boolean
    meeting?: boolean | meetingDefaultArgs<ExtArgs>
    note?: boolean | emotionscore$noteArgs<ExtArgs>
    _count?: boolean | EmotionscoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emotionscore"]>



  export type emotionscoreSelectScalar = {
    id?: boolean
    meeting_id?: boolean
    created_at?: boolean
    score?: boolean
  }

  export type emotionscoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "meeting_id" | "created_at" | "score", ExtArgs["result"]["emotionscore"]>
  export type emotionscoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | meetingDefaultArgs<ExtArgs>
    note?: boolean | emotionscore$noteArgs<ExtArgs>
    _count?: boolean | EmotionscoreCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $emotionscorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "emotionscore"
    objects: {
      meeting: Prisma.$meetingPayload<ExtArgs>
      note: Prisma.$notePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      meeting_id: string
      created_at: Date
      score: number
    }, ExtArgs["result"]["emotionscore"]>
    composites: {}
  }

  type emotionscoreGetPayload<S extends boolean | null | undefined | emotionscoreDefaultArgs> = $Result.GetResult<Prisma.$emotionscorePayload, S>

  type emotionscoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<emotionscoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmotionscoreCountAggregateInputType | true
    }

  export interface emotionscoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['emotionscore'], meta: { name: 'emotionscore' } }
    /**
     * Find zero or one Emotionscore that matches the filter.
     * @param {emotionscoreFindUniqueArgs} args - Arguments to find a Emotionscore
     * @example
     * // Get one Emotionscore
     * const emotionscore = await prisma.emotionscore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends emotionscoreFindUniqueArgs>(args: SelectSubset<T, emotionscoreFindUniqueArgs<ExtArgs>>): Prisma__emotionscoreClient<$Result.GetResult<Prisma.$emotionscorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Emotionscore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {emotionscoreFindUniqueOrThrowArgs} args - Arguments to find a Emotionscore
     * @example
     * // Get one Emotionscore
     * const emotionscore = await prisma.emotionscore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends emotionscoreFindUniqueOrThrowArgs>(args: SelectSubset<T, emotionscoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__emotionscoreClient<$Result.GetResult<Prisma.$emotionscorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emotionscore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emotionscoreFindFirstArgs} args - Arguments to find a Emotionscore
     * @example
     * // Get one Emotionscore
     * const emotionscore = await prisma.emotionscore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends emotionscoreFindFirstArgs>(args?: SelectSubset<T, emotionscoreFindFirstArgs<ExtArgs>>): Prisma__emotionscoreClient<$Result.GetResult<Prisma.$emotionscorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emotionscore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emotionscoreFindFirstOrThrowArgs} args - Arguments to find a Emotionscore
     * @example
     * // Get one Emotionscore
     * const emotionscore = await prisma.emotionscore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends emotionscoreFindFirstOrThrowArgs>(args?: SelectSubset<T, emotionscoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__emotionscoreClient<$Result.GetResult<Prisma.$emotionscorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emotionscores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emotionscoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emotionscores
     * const emotionscores = await prisma.emotionscore.findMany()
     * 
     * // Get first 10 Emotionscores
     * const emotionscores = await prisma.emotionscore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emotionscoreWithIdOnly = await prisma.emotionscore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends emotionscoreFindManyArgs>(args?: SelectSubset<T, emotionscoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emotionscorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Emotionscore.
     * @param {emotionscoreCreateArgs} args - Arguments to create a Emotionscore.
     * @example
     * // Create one Emotionscore
     * const Emotionscore = await prisma.emotionscore.create({
     *   data: {
     *     // ... data to create a Emotionscore
     *   }
     * })
     * 
     */
    create<T extends emotionscoreCreateArgs>(args: SelectSubset<T, emotionscoreCreateArgs<ExtArgs>>): Prisma__emotionscoreClient<$Result.GetResult<Prisma.$emotionscorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emotionscores.
     * @param {emotionscoreCreateManyArgs} args - Arguments to create many Emotionscores.
     * @example
     * // Create many Emotionscores
     * const emotionscore = await prisma.emotionscore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends emotionscoreCreateManyArgs>(args?: SelectSubset<T, emotionscoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Emotionscore.
     * @param {emotionscoreDeleteArgs} args - Arguments to delete one Emotionscore.
     * @example
     * // Delete one Emotionscore
     * const Emotionscore = await prisma.emotionscore.delete({
     *   where: {
     *     // ... filter to delete one Emotionscore
     *   }
     * })
     * 
     */
    delete<T extends emotionscoreDeleteArgs>(args: SelectSubset<T, emotionscoreDeleteArgs<ExtArgs>>): Prisma__emotionscoreClient<$Result.GetResult<Prisma.$emotionscorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Emotionscore.
     * @param {emotionscoreUpdateArgs} args - Arguments to update one Emotionscore.
     * @example
     * // Update one Emotionscore
     * const emotionscore = await prisma.emotionscore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends emotionscoreUpdateArgs>(args: SelectSubset<T, emotionscoreUpdateArgs<ExtArgs>>): Prisma__emotionscoreClient<$Result.GetResult<Prisma.$emotionscorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emotionscores.
     * @param {emotionscoreDeleteManyArgs} args - Arguments to filter Emotionscores to delete.
     * @example
     * // Delete a few Emotionscores
     * const { count } = await prisma.emotionscore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends emotionscoreDeleteManyArgs>(args?: SelectSubset<T, emotionscoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emotionscores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emotionscoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emotionscores
     * const emotionscore = await prisma.emotionscore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends emotionscoreUpdateManyArgs>(args: SelectSubset<T, emotionscoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Emotionscore.
     * @param {emotionscoreUpsertArgs} args - Arguments to update or create a Emotionscore.
     * @example
     * // Update or create a Emotionscore
     * const emotionscore = await prisma.emotionscore.upsert({
     *   create: {
     *     // ... data to create a Emotionscore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emotionscore we want to update
     *   }
     * })
     */
    upsert<T extends emotionscoreUpsertArgs>(args: SelectSubset<T, emotionscoreUpsertArgs<ExtArgs>>): Prisma__emotionscoreClient<$Result.GetResult<Prisma.$emotionscorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emotionscores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emotionscoreCountArgs} args - Arguments to filter Emotionscores to count.
     * @example
     * // Count the number of Emotionscores
     * const count = await prisma.emotionscore.count({
     *   where: {
     *     // ... the filter for the Emotionscores we want to count
     *   }
     * })
    **/
    count<T extends emotionscoreCountArgs>(
      args?: Subset<T, emotionscoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmotionscoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emotionscore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmotionscoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmotionscoreAggregateArgs>(args: Subset<T, EmotionscoreAggregateArgs>): Prisma.PrismaPromise<GetEmotionscoreAggregateType<T>>

    /**
     * Group by Emotionscore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emotionscoreGroupByArgs} args - Group by arguments.
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
      T extends emotionscoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: emotionscoreGroupByArgs['orderBy'] }
        : { orderBy?: emotionscoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, emotionscoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmotionscoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the emotionscore model
   */
  readonly fields: emotionscoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for emotionscore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__emotionscoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meeting<T extends meetingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, meetingDefaultArgs<ExtArgs>>): Prisma__meetingClient<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    note<T extends emotionscore$noteArgs<ExtArgs> = {}>(args?: Subset<T, emotionscore$noteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the emotionscore model
   */
  interface emotionscoreFieldRefs {
    readonly id: FieldRef<"emotionscore", 'String'>
    readonly meeting_id: FieldRef<"emotionscore", 'String'>
    readonly created_at: FieldRef<"emotionscore", 'DateTime'>
    readonly score: FieldRef<"emotionscore", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * emotionscore findUnique
   */
  export type emotionscoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emotionscore
     */
    select?: emotionscoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emotionscore
     */
    omit?: emotionscoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emotionscoreInclude<ExtArgs> | null
    /**
     * Filter, which emotionscore to fetch.
     */
    where: emotionscoreWhereUniqueInput
  }

  /**
   * emotionscore findUniqueOrThrow
   */
  export type emotionscoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emotionscore
     */
    select?: emotionscoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emotionscore
     */
    omit?: emotionscoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emotionscoreInclude<ExtArgs> | null
    /**
     * Filter, which emotionscore to fetch.
     */
    where: emotionscoreWhereUniqueInput
  }

  /**
   * emotionscore findFirst
   */
  export type emotionscoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emotionscore
     */
    select?: emotionscoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emotionscore
     */
    omit?: emotionscoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emotionscoreInclude<ExtArgs> | null
    /**
     * Filter, which emotionscore to fetch.
     */
    where?: emotionscoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emotionscores to fetch.
     */
    orderBy?: emotionscoreOrderByWithRelationInput | emotionscoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for emotionscores.
     */
    cursor?: emotionscoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emotionscores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emotionscores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of emotionscores.
     */
    distinct?: EmotionscoreScalarFieldEnum | EmotionscoreScalarFieldEnum[]
  }

  /**
   * emotionscore findFirstOrThrow
   */
  export type emotionscoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emotionscore
     */
    select?: emotionscoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emotionscore
     */
    omit?: emotionscoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emotionscoreInclude<ExtArgs> | null
    /**
     * Filter, which emotionscore to fetch.
     */
    where?: emotionscoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emotionscores to fetch.
     */
    orderBy?: emotionscoreOrderByWithRelationInput | emotionscoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for emotionscores.
     */
    cursor?: emotionscoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emotionscores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emotionscores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of emotionscores.
     */
    distinct?: EmotionscoreScalarFieldEnum | EmotionscoreScalarFieldEnum[]
  }

  /**
   * emotionscore findMany
   */
  export type emotionscoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emotionscore
     */
    select?: emotionscoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emotionscore
     */
    omit?: emotionscoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emotionscoreInclude<ExtArgs> | null
    /**
     * Filter, which emotionscores to fetch.
     */
    where?: emotionscoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emotionscores to fetch.
     */
    orderBy?: emotionscoreOrderByWithRelationInput | emotionscoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing emotionscores.
     */
    cursor?: emotionscoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emotionscores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emotionscores.
     */
    skip?: number
    distinct?: EmotionscoreScalarFieldEnum | EmotionscoreScalarFieldEnum[]
  }

  /**
   * emotionscore create
   */
  export type emotionscoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emotionscore
     */
    select?: emotionscoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emotionscore
     */
    omit?: emotionscoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emotionscoreInclude<ExtArgs> | null
    /**
     * The data needed to create a emotionscore.
     */
    data: XOR<emotionscoreCreateInput, emotionscoreUncheckedCreateInput>
  }

  /**
   * emotionscore createMany
   */
  export type emotionscoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many emotionscores.
     */
    data: emotionscoreCreateManyInput | emotionscoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * emotionscore update
   */
  export type emotionscoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emotionscore
     */
    select?: emotionscoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emotionscore
     */
    omit?: emotionscoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emotionscoreInclude<ExtArgs> | null
    /**
     * The data needed to update a emotionscore.
     */
    data: XOR<emotionscoreUpdateInput, emotionscoreUncheckedUpdateInput>
    /**
     * Choose, which emotionscore to update.
     */
    where: emotionscoreWhereUniqueInput
  }

  /**
   * emotionscore updateMany
   */
  export type emotionscoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update emotionscores.
     */
    data: XOR<emotionscoreUpdateManyMutationInput, emotionscoreUncheckedUpdateManyInput>
    /**
     * Filter which emotionscores to update
     */
    where?: emotionscoreWhereInput
    /**
     * Limit how many emotionscores to update.
     */
    limit?: number
  }

  /**
   * emotionscore upsert
   */
  export type emotionscoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emotionscore
     */
    select?: emotionscoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emotionscore
     */
    omit?: emotionscoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emotionscoreInclude<ExtArgs> | null
    /**
     * The filter to search for the emotionscore to update in case it exists.
     */
    where: emotionscoreWhereUniqueInput
    /**
     * In case the emotionscore found by the `where` argument doesn't exist, create a new emotionscore with this data.
     */
    create: XOR<emotionscoreCreateInput, emotionscoreUncheckedCreateInput>
    /**
     * In case the emotionscore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<emotionscoreUpdateInput, emotionscoreUncheckedUpdateInput>
  }

  /**
   * emotionscore delete
   */
  export type emotionscoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emotionscore
     */
    select?: emotionscoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emotionscore
     */
    omit?: emotionscoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emotionscoreInclude<ExtArgs> | null
    /**
     * Filter which emotionscore to delete.
     */
    where: emotionscoreWhereUniqueInput
  }

  /**
   * emotionscore deleteMany
   */
  export type emotionscoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which emotionscores to delete
     */
    where?: emotionscoreWhereInput
    /**
     * Limit how many emotionscores to delete.
     */
    limit?: number
  }

  /**
   * emotionscore.note
   */
  export type emotionscore$noteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
    where?: noteWhereInput
    orderBy?: noteOrderByWithRelationInput | noteOrderByWithRelationInput[]
    cursor?: noteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * emotionscore without action
   */
  export type emotionscoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emotionscore
     */
    select?: emotionscoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emotionscore
     */
    omit?: emotionscoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emotionscoreInclude<ExtArgs> | null
  }


  /**
   * Model meeting
   */

  export type AggregateMeeting = {
    _count: MeetingCountAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  export type MeetingMinAggregateOutputType = {
    id: string | null
    title: string | null
    created_at: Date | null
    delete_at: Date | null
  }

  export type MeetingMaxAggregateOutputType = {
    id: string | null
    title: string | null
    created_at: Date | null
    delete_at: Date | null
  }

  export type MeetingCountAggregateOutputType = {
    id: number
    title: number
    created_at: number
    delete_at: number
    _all: number
  }


  export type MeetingMinAggregateInputType = {
    id?: true
    title?: true
    created_at?: true
    delete_at?: true
  }

  export type MeetingMaxAggregateInputType = {
    id?: true
    title?: true
    created_at?: true
    delete_at?: true
  }

  export type MeetingCountAggregateInputType = {
    id?: true
    title?: true
    created_at?: true
    delete_at?: true
    _all?: true
  }

  export type MeetingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meeting to aggregate.
     */
    where?: meetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetings to fetch.
     */
    orderBy?: meetingOrderByWithRelationInput | meetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: meetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned meetings
    **/
    _count?: true | MeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingMaxAggregateInputType
  }

  export type GetMeetingAggregateType<T extends MeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeeting[P]>
      : GetScalarType<T[P], AggregateMeeting[P]>
  }




  export type meetingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meetingWhereInput
    orderBy?: meetingOrderByWithAggregationInput | meetingOrderByWithAggregationInput[]
    by: MeetingScalarFieldEnum[] | MeetingScalarFieldEnum
    having?: meetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingCountAggregateInputType | true
    _min?: MeetingMinAggregateInputType
    _max?: MeetingMaxAggregateInputType
  }

  export type MeetingGroupByOutputType = {
    id: string
    title: string
    created_at: Date
    delete_at: Date | null
    _count: MeetingCountAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  type GetMeetingGroupByPayload<T extends meetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingGroupByOutputType[P]>
        }
      >
    >


  export type meetingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    created_at?: boolean
    delete_at?: boolean
    emotionscore?: boolean | meeting$emotionscoreArgs<ExtArgs>
    note?: boolean | meeting$noteArgs<ExtArgs>
    participant?: boolean | meeting$participantArgs<ExtArgs>
    _count?: boolean | MeetingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>



  export type meetingSelectScalar = {
    id?: boolean
    title?: boolean
    created_at?: boolean
    delete_at?: boolean
  }

  export type meetingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "created_at" | "delete_at", ExtArgs["result"]["meeting"]>
  export type meetingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emotionscore?: boolean | meeting$emotionscoreArgs<ExtArgs>
    note?: boolean | meeting$noteArgs<ExtArgs>
    participant?: boolean | meeting$participantArgs<ExtArgs>
    _count?: boolean | MeetingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $meetingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "meeting"
    objects: {
      emotionscore: Prisma.$emotionscorePayload<ExtArgs>[]
      note: Prisma.$notePayload<ExtArgs>[]
      participant: Prisma.$participantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      created_at: Date
      delete_at: Date | null
    }, ExtArgs["result"]["meeting"]>
    composites: {}
  }

  type meetingGetPayload<S extends boolean | null | undefined | meetingDefaultArgs> = $Result.GetResult<Prisma.$meetingPayload, S>

  type meetingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<meetingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingCountAggregateInputType | true
    }

  export interface meetingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['meeting'], meta: { name: 'meeting' } }
    /**
     * Find zero or one Meeting that matches the filter.
     * @param {meetingFindUniqueArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends meetingFindUniqueArgs>(args: SelectSubset<T, meetingFindUniqueArgs<ExtArgs>>): Prisma__meetingClient<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meeting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {meetingFindUniqueOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends meetingFindUniqueOrThrowArgs>(args: SelectSubset<T, meetingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__meetingClient<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingFindFirstArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends meetingFindFirstArgs>(args?: SelectSubset<T, meetingFindFirstArgs<ExtArgs>>): Prisma__meetingClient<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingFindFirstOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends meetingFindFirstOrThrowArgs>(args?: SelectSubset<T, meetingFindFirstOrThrowArgs<ExtArgs>>): Prisma__meetingClient<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetings
     * const meetings = await prisma.meeting.findMany()
     * 
     * // Get first 10 Meetings
     * const meetings = await prisma.meeting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingWithIdOnly = await prisma.meeting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends meetingFindManyArgs>(args?: SelectSubset<T, meetingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meeting.
     * @param {meetingCreateArgs} args - Arguments to create a Meeting.
     * @example
     * // Create one Meeting
     * const Meeting = await prisma.meeting.create({
     *   data: {
     *     // ... data to create a Meeting
     *   }
     * })
     * 
     */
    create<T extends meetingCreateArgs>(args: SelectSubset<T, meetingCreateArgs<ExtArgs>>): Prisma__meetingClient<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meetings.
     * @param {meetingCreateManyArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends meetingCreateManyArgs>(args?: SelectSubset<T, meetingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Meeting.
     * @param {meetingDeleteArgs} args - Arguments to delete one Meeting.
     * @example
     * // Delete one Meeting
     * const Meeting = await prisma.meeting.delete({
     *   where: {
     *     // ... filter to delete one Meeting
     *   }
     * })
     * 
     */
    delete<T extends meetingDeleteArgs>(args: SelectSubset<T, meetingDeleteArgs<ExtArgs>>): Prisma__meetingClient<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meeting.
     * @param {meetingUpdateArgs} args - Arguments to update one Meeting.
     * @example
     * // Update one Meeting
     * const meeting = await prisma.meeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends meetingUpdateArgs>(args: SelectSubset<T, meetingUpdateArgs<ExtArgs>>): Prisma__meetingClient<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meetings.
     * @param {meetingDeleteManyArgs} args - Arguments to filter Meetings to delete.
     * @example
     * // Delete a few Meetings
     * const { count } = await prisma.meeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends meetingDeleteManyArgs>(args?: SelectSubset<T, meetingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends meetingUpdateManyArgs>(args: SelectSubset<T, meetingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meeting.
     * @param {meetingUpsertArgs} args - Arguments to update or create a Meeting.
     * @example
     * // Update or create a Meeting
     * const meeting = await prisma.meeting.upsert({
     *   create: {
     *     // ... data to create a Meeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meeting we want to update
     *   }
     * })
     */
    upsert<T extends meetingUpsertArgs>(args: SelectSubset<T, meetingUpsertArgs<ExtArgs>>): Prisma__meetingClient<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingCountArgs} args - Arguments to filter Meetings to count.
     * @example
     * // Count the number of Meetings
     * const count = await prisma.meeting.count({
     *   where: {
     *     // ... the filter for the Meetings we want to count
     *   }
     * })
    **/
    count<T extends meetingCountArgs>(
      args?: Subset<T, meetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MeetingAggregateArgs>(args: Subset<T, MeetingAggregateArgs>): Prisma.PrismaPromise<GetMeetingAggregateType<T>>

    /**
     * Group by Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingGroupByArgs} args - Group by arguments.
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
      T extends meetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: meetingGroupByArgs['orderBy'] }
        : { orderBy?: meetingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, meetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the meeting model
   */
  readonly fields: meetingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for meeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__meetingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emotionscore<T extends meeting$emotionscoreArgs<ExtArgs> = {}>(args?: Subset<T, meeting$emotionscoreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emotionscorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    note<T extends meeting$noteArgs<ExtArgs> = {}>(args?: Subset<T, meeting$noteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participant<T extends meeting$participantArgs<ExtArgs> = {}>(args?: Subset<T, meeting$participantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the meeting model
   */
  interface meetingFieldRefs {
    readonly id: FieldRef<"meeting", 'String'>
    readonly title: FieldRef<"meeting", 'String'>
    readonly created_at: FieldRef<"meeting", 'DateTime'>
    readonly delete_at: FieldRef<"meeting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * meeting findUnique
   */
  export type meetingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting
     */
    omit?: meetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingInclude<ExtArgs> | null
    /**
     * Filter, which meeting to fetch.
     */
    where: meetingWhereUniqueInput
  }

  /**
   * meeting findUniqueOrThrow
   */
  export type meetingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting
     */
    omit?: meetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingInclude<ExtArgs> | null
    /**
     * Filter, which meeting to fetch.
     */
    where: meetingWhereUniqueInput
  }

  /**
   * meeting findFirst
   */
  export type meetingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting
     */
    omit?: meetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingInclude<ExtArgs> | null
    /**
     * Filter, which meeting to fetch.
     */
    where?: meetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetings to fetch.
     */
    orderBy?: meetingOrderByWithRelationInput | meetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meetings.
     */
    cursor?: meetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * meeting findFirstOrThrow
   */
  export type meetingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting
     */
    omit?: meetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingInclude<ExtArgs> | null
    /**
     * Filter, which meeting to fetch.
     */
    where?: meetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetings to fetch.
     */
    orderBy?: meetingOrderByWithRelationInput | meetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meetings.
     */
    cursor?: meetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * meeting findMany
   */
  export type meetingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting
     */
    omit?: meetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingInclude<ExtArgs> | null
    /**
     * Filter, which meetings to fetch.
     */
    where?: meetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetings to fetch.
     */
    orderBy?: meetingOrderByWithRelationInput | meetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing meetings.
     */
    cursor?: meetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetings.
     */
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * meeting create
   */
  export type meetingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting
     */
    omit?: meetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingInclude<ExtArgs> | null
    /**
     * The data needed to create a meeting.
     */
    data: XOR<meetingCreateInput, meetingUncheckedCreateInput>
  }

  /**
   * meeting createMany
   */
  export type meetingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many meetings.
     */
    data: meetingCreateManyInput | meetingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * meeting update
   */
  export type meetingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting
     */
    omit?: meetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingInclude<ExtArgs> | null
    /**
     * The data needed to update a meeting.
     */
    data: XOR<meetingUpdateInput, meetingUncheckedUpdateInput>
    /**
     * Choose, which meeting to update.
     */
    where: meetingWhereUniqueInput
  }

  /**
   * meeting updateMany
   */
  export type meetingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update meetings.
     */
    data: XOR<meetingUpdateManyMutationInput, meetingUncheckedUpdateManyInput>
    /**
     * Filter which meetings to update
     */
    where?: meetingWhereInput
    /**
     * Limit how many meetings to update.
     */
    limit?: number
  }

  /**
   * meeting upsert
   */
  export type meetingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting
     */
    omit?: meetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingInclude<ExtArgs> | null
    /**
     * The filter to search for the meeting to update in case it exists.
     */
    where: meetingWhereUniqueInput
    /**
     * In case the meeting found by the `where` argument doesn't exist, create a new meeting with this data.
     */
    create: XOR<meetingCreateInput, meetingUncheckedCreateInput>
    /**
     * In case the meeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<meetingUpdateInput, meetingUncheckedUpdateInput>
  }

  /**
   * meeting delete
   */
  export type meetingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting
     */
    omit?: meetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingInclude<ExtArgs> | null
    /**
     * Filter which meeting to delete.
     */
    where: meetingWhereUniqueInput
  }

  /**
   * meeting deleteMany
   */
  export type meetingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meetings to delete
     */
    where?: meetingWhereInput
    /**
     * Limit how many meetings to delete.
     */
    limit?: number
  }

  /**
   * meeting.emotionscore
   */
  export type meeting$emotionscoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emotionscore
     */
    select?: emotionscoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emotionscore
     */
    omit?: emotionscoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emotionscoreInclude<ExtArgs> | null
    where?: emotionscoreWhereInput
    orderBy?: emotionscoreOrderByWithRelationInput | emotionscoreOrderByWithRelationInput[]
    cursor?: emotionscoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmotionscoreScalarFieldEnum | EmotionscoreScalarFieldEnum[]
  }

  /**
   * meeting.note
   */
  export type meeting$noteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
    where?: noteWhereInput
    orderBy?: noteOrderByWithRelationInput | noteOrderByWithRelationInput[]
    cursor?: noteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * meeting.participant
   */
  export type meeting$participantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
    where?: participantWhereInput
    orderBy?: participantOrderByWithRelationInput | participantOrderByWithRelationInput[]
    cursor?: participantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * meeting without action
   */
  export type meetingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meeting
     */
    omit?: meetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingInclude<ExtArgs> | null
  }


  /**
   * Model note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteMinAggregateOutputType = {
    id: string | null
    meeting_id: string | null
    emotion_score_id: string | null
    date: Date | null
    content: string | null
  }

  export type NoteMaxAggregateOutputType = {
    id: string | null
    meeting_id: string | null
    emotion_score_id: string | null
    date: Date | null
    content: string | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    meeting_id: number
    emotion_score_id: number
    date: number
    content: number
    _all: number
  }


  export type NoteMinAggregateInputType = {
    id?: true
    meeting_id?: true
    emotion_score_id?: true
    date?: true
    content?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    meeting_id?: true
    emotion_score_id?: true
    date?: true
    content?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    meeting_id?: true
    emotion_score_id?: true
    date?: true
    content?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which note to aggregate.
     */
    where?: noteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: noteOrderByWithRelationInput | noteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: noteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type noteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: noteWhereInput
    orderBy?: noteOrderByWithAggregationInput | noteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: noteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    id: string
    meeting_id: string
    emotion_score_id: string
    date: Date
    content: string
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends noteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type noteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meeting_id?: boolean
    emotion_score_id?: boolean
    date?: boolean
    content?: boolean
    emotionscore?: boolean | emotionscoreDefaultArgs<ExtArgs>
    meeting?: boolean | meetingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>



  export type noteSelectScalar = {
    id?: boolean
    meeting_id?: boolean
    emotion_score_id?: boolean
    date?: boolean
    content?: boolean
  }

  export type noteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "meeting_id" | "emotion_score_id" | "date" | "content", ExtArgs["result"]["note"]>
  export type noteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emotionscore?: boolean | emotionscoreDefaultArgs<ExtArgs>
    meeting?: boolean | meetingDefaultArgs<ExtArgs>
  }

  export type $notePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "note"
    objects: {
      emotionscore: Prisma.$emotionscorePayload<ExtArgs>
      meeting: Prisma.$meetingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      meeting_id: string
      emotion_score_id: string
      date: Date
      content: string
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type noteGetPayload<S extends boolean | null | undefined | noteDefaultArgs> = $Result.GetResult<Prisma.$notePayload, S>

  type noteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<noteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface noteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['note'], meta: { name: 'note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {noteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends noteFindUniqueArgs>(args: SelectSubset<T, noteFindUniqueArgs<ExtArgs>>): Prisma__noteClient<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {noteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends noteFindUniqueOrThrowArgs>(args: SelectSubset<T, noteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__noteClient<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends noteFindFirstArgs>(args?: SelectSubset<T, noteFindFirstArgs<ExtArgs>>): Prisma__noteClient<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends noteFindFirstOrThrowArgs>(args?: SelectSubset<T, noteFindFirstOrThrowArgs<ExtArgs>>): Prisma__noteClient<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends noteFindManyArgs>(args?: SelectSubset<T, noteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Note.
     * @param {noteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends noteCreateArgs>(args: SelectSubset<T, noteCreateArgs<ExtArgs>>): Prisma__noteClient<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {noteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends noteCreateManyArgs>(args?: SelectSubset<T, noteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Note.
     * @param {noteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends noteDeleteArgs>(args: SelectSubset<T, noteDeleteArgs<ExtArgs>>): Prisma__noteClient<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Note.
     * @param {noteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends noteUpdateArgs>(args: SelectSubset<T, noteUpdateArgs<ExtArgs>>): Prisma__noteClient<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {noteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends noteDeleteManyArgs>(args?: SelectSubset<T, noteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends noteUpdateManyArgs>(args: SelectSubset<T, noteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Note.
     * @param {noteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends noteUpsertArgs>(args: SelectSubset<T, noteUpsertArgs<ExtArgs>>): Prisma__noteClient<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends noteCountArgs>(
      args?: Subset<T, noteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noteGroupByArgs} args - Group by arguments.
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
      T extends noteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: noteGroupByArgs['orderBy'] }
        : { orderBy?: noteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, noteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the note model
   */
  readonly fields: noteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__noteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emotionscore<T extends emotionscoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, emotionscoreDefaultArgs<ExtArgs>>): Prisma__emotionscoreClient<$Result.GetResult<Prisma.$emotionscorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    meeting<T extends meetingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, meetingDefaultArgs<ExtArgs>>): Prisma__meetingClient<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the note model
   */
  interface noteFieldRefs {
    readonly id: FieldRef<"note", 'String'>
    readonly meeting_id: FieldRef<"note", 'String'>
    readonly emotion_score_id: FieldRef<"note", 'String'>
    readonly date: FieldRef<"note", 'DateTime'>
    readonly content: FieldRef<"note", 'String'>
  }
    

  // Custom InputTypes
  /**
   * note findUnique
   */
  export type noteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
    /**
     * Filter, which note to fetch.
     */
    where: noteWhereUniqueInput
  }

  /**
   * note findUniqueOrThrow
   */
  export type noteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
    /**
     * Filter, which note to fetch.
     */
    where: noteWhereUniqueInput
  }

  /**
   * note findFirst
   */
  export type noteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
    /**
     * Filter, which note to fetch.
     */
    where?: noteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: noteOrderByWithRelationInput | noteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notes.
     */
    cursor?: noteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * note findFirstOrThrow
   */
  export type noteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
    /**
     * Filter, which note to fetch.
     */
    where?: noteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: noteOrderByWithRelationInput | noteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notes.
     */
    cursor?: noteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * note findMany
   */
  export type noteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where?: noteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: noteOrderByWithRelationInput | noteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notes.
     */
    cursor?: noteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * note create
   */
  export type noteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
    /**
     * The data needed to create a note.
     */
    data: XOR<noteCreateInput, noteUncheckedCreateInput>
  }

  /**
   * note createMany
   */
  export type noteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notes.
     */
    data: noteCreateManyInput | noteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * note update
   */
  export type noteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
    /**
     * The data needed to update a note.
     */
    data: XOR<noteUpdateInput, noteUncheckedUpdateInput>
    /**
     * Choose, which note to update.
     */
    where: noteWhereUniqueInput
  }

  /**
   * note updateMany
   */
  export type noteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notes.
     */
    data: XOR<noteUpdateManyMutationInput, noteUncheckedUpdateManyInput>
    /**
     * Filter which notes to update
     */
    where?: noteWhereInput
    /**
     * Limit how many notes to update.
     */
    limit?: number
  }

  /**
   * note upsert
   */
  export type noteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
    /**
     * The filter to search for the note to update in case it exists.
     */
    where: noteWhereUniqueInput
    /**
     * In case the note found by the `where` argument doesn't exist, create a new note with this data.
     */
    create: XOR<noteCreateInput, noteUncheckedCreateInput>
    /**
     * In case the note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<noteUpdateInput, noteUncheckedUpdateInput>
  }

  /**
   * note delete
   */
  export type noteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
    /**
     * Filter which note to delete.
     */
    where: noteWhereUniqueInput
  }

  /**
   * note deleteMany
   */
  export type noteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notes to delete
     */
    where?: noteWhereInput
    /**
     * Limit how many notes to delete.
     */
    limit?: number
  }

  /**
   * note without action
   */
  export type noteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
  }


  /**
   * Model participant
   */

  export type AggregateParticipant = {
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  export type ParticipantMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    meeting_id: string | null
    joined_at: Date | null
    left_at: Date | null
  }

  export type ParticipantMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    meeting_id: string | null
    joined_at: Date | null
    left_at: Date | null
  }

  export type ParticipantCountAggregateOutputType = {
    id: number
    user_id: number
    meeting_id: number
    joined_at: number
    left_at: number
    _all: number
  }


  export type ParticipantMinAggregateInputType = {
    id?: true
    user_id?: true
    meeting_id?: true
    joined_at?: true
    left_at?: true
  }

  export type ParticipantMaxAggregateInputType = {
    id?: true
    user_id?: true
    meeting_id?: true
    joined_at?: true
    left_at?: true
  }

  export type ParticipantCountAggregateInputType = {
    id?: true
    user_id?: true
    meeting_id?: true
    joined_at?: true
    left_at?: true
    _all?: true
  }

  export type ParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which participant to aggregate.
     */
    where?: participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participants to fetch.
     */
    orderBy?: participantOrderByWithRelationInput | participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned participants
    **/
    _count?: true | ParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantMaxAggregateInputType
  }

  export type GetParticipantAggregateType<T extends ParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipant[P]>
      : GetScalarType<T[P], AggregateParticipant[P]>
  }




  export type participantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: participantWhereInput
    orderBy?: participantOrderByWithAggregationInput | participantOrderByWithAggregationInput[]
    by: ParticipantScalarFieldEnum[] | ParticipantScalarFieldEnum
    having?: participantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantCountAggregateInputType | true
    _min?: ParticipantMinAggregateInputType
    _max?: ParticipantMaxAggregateInputType
  }

  export type ParticipantGroupByOutputType = {
    id: string
    user_id: string
    meeting_id: string
    joined_at: Date
    left_at: Date | null
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  type GetParticipantGroupByPayload<T extends participantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
        }
      >
    >


  export type participantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    meeting_id?: boolean
    joined_at?: boolean
    left_at?: boolean
    meeting?: boolean | meetingDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>



  export type participantSelectScalar = {
    id?: boolean
    user_id?: boolean
    meeting_id?: boolean
    joined_at?: boolean
    left_at?: boolean
  }

  export type participantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "meeting_id" | "joined_at" | "left_at", ExtArgs["result"]["participant"]>
  export type participantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | meetingDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $participantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "participant"
    objects: {
      meeting: Prisma.$meetingPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      meeting_id: string
      joined_at: Date
      left_at: Date | null
    }, ExtArgs["result"]["participant"]>
    composites: {}
  }

  type participantGetPayload<S extends boolean | null | undefined | participantDefaultArgs> = $Result.GetResult<Prisma.$participantPayload, S>

  type participantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<participantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantCountAggregateInputType | true
    }

  export interface participantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['participant'], meta: { name: 'participant' } }
    /**
     * Find zero or one Participant that matches the filter.
     * @param {participantFindUniqueArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends participantFindUniqueArgs>(args: SelectSubset<T, participantFindUniqueArgs<ExtArgs>>): Prisma__participantClient<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {participantFindUniqueOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends participantFindUniqueOrThrowArgs>(args: SelectSubset<T, participantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__participantClient<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantFindFirstArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends participantFindFirstArgs>(args?: SelectSubset<T, participantFindFirstArgs<ExtArgs>>): Prisma__participantClient<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantFindFirstOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends participantFindFirstOrThrowArgs>(args?: SelectSubset<T, participantFindFirstOrThrowArgs<ExtArgs>>): Prisma__participantClient<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participants
     * const participants = await prisma.participant.findMany()
     * 
     * // Get first 10 Participants
     * const participants = await prisma.participant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantWithIdOnly = await prisma.participant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends participantFindManyArgs>(args?: SelectSubset<T, participantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participant.
     * @param {participantCreateArgs} args - Arguments to create a Participant.
     * @example
     * // Create one Participant
     * const Participant = await prisma.participant.create({
     *   data: {
     *     // ... data to create a Participant
     *   }
     * })
     * 
     */
    create<T extends participantCreateArgs>(args: SelectSubset<T, participantCreateArgs<ExtArgs>>): Prisma__participantClient<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participants.
     * @param {participantCreateManyArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends participantCreateManyArgs>(args?: SelectSubset<T, participantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Participant.
     * @param {participantDeleteArgs} args - Arguments to delete one Participant.
     * @example
     * // Delete one Participant
     * const Participant = await prisma.participant.delete({
     *   where: {
     *     // ... filter to delete one Participant
     *   }
     * })
     * 
     */
    delete<T extends participantDeleteArgs>(args: SelectSubset<T, participantDeleteArgs<ExtArgs>>): Prisma__participantClient<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participant.
     * @param {participantUpdateArgs} args - Arguments to update one Participant.
     * @example
     * // Update one Participant
     * const participant = await prisma.participant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends participantUpdateArgs>(args: SelectSubset<T, participantUpdateArgs<ExtArgs>>): Prisma__participantClient<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participants.
     * @param {participantDeleteManyArgs} args - Arguments to filter Participants to delete.
     * @example
     * // Delete a few Participants
     * const { count } = await prisma.participant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends participantDeleteManyArgs>(args?: SelectSubset<T, participantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends participantUpdateManyArgs>(args: SelectSubset<T, participantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Participant.
     * @param {participantUpsertArgs} args - Arguments to update or create a Participant.
     * @example
     * // Update or create a Participant
     * const participant = await prisma.participant.upsert({
     *   create: {
     *     // ... data to create a Participant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participant we want to update
     *   }
     * })
     */
    upsert<T extends participantUpsertArgs>(args: SelectSubset<T, participantUpsertArgs<ExtArgs>>): Prisma__participantClient<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantCountArgs} args - Arguments to filter Participants to count.
     * @example
     * // Count the number of Participants
     * const count = await prisma.participant.count({
     *   where: {
     *     // ... the filter for the Participants we want to count
     *   }
     * })
    **/
    count<T extends participantCountArgs>(
      args?: Subset<T, participantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipantAggregateArgs>(args: Subset<T, ParticipantAggregateArgs>): Prisma.PrismaPromise<GetParticipantAggregateType<T>>

    /**
     * Group by Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantGroupByArgs} args - Group by arguments.
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
      T extends participantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: participantGroupByArgs['orderBy'] }
        : { orderBy?: participantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, participantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the participant model
   */
  readonly fields: participantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for participant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__participantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meeting<T extends meetingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, meetingDefaultArgs<ExtArgs>>): Prisma__meetingClient<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the participant model
   */
  interface participantFieldRefs {
    readonly id: FieldRef<"participant", 'String'>
    readonly user_id: FieldRef<"participant", 'String'>
    readonly meeting_id: FieldRef<"participant", 'String'>
    readonly joined_at: FieldRef<"participant", 'DateTime'>
    readonly left_at: FieldRef<"participant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * participant findUnique
   */
  export type participantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
    /**
     * Filter, which participant to fetch.
     */
    where: participantWhereUniqueInput
  }

  /**
   * participant findUniqueOrThrow
   */
  export type participantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
    /**
     * Filter, which participant to fetch.
     */
    where: participantWhereUniqueInput
  }

  /**
   * participant findFirst
   */
  export type participantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
    /**
     * Filter, which participant to fetch.
     */
    where?: participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participants to fetch.
     */
    orderBy?: participantOrderByWithRelationInput | participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for participants.
     */
    cursor?: participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * participant findFirstOrThrow
   */
  export type participantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
    /**
     * Filter, which participant to fetch.
     */
    where?: participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participants to fetch.
     */
    orderBy?: participantOrderByWithRelationInput | participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for participants.
     */
    cursor?: participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * participant findMany
   */
  export type participantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
    /**
     * Filter, which participants to fetch.
     */
    where?: participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participants to fetch.
     */
    orderBy?: participantOrderByWithRelationInput | participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing participants.
     */
    cursor?: participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participants.
     */
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * participant create
   */
  export type participantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
    /**
     * The data needed to create a participant.
     */
    data: XOR<participantCreateInput, participantUncheckedCreateInput>
  }

  /**
   * participant createMany
   */
  export type participantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many participants.
     */
    data: participantCreateManyInput | participantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * participant update
   */
  export type participantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
    /**
     * The data needed to update a participant.
     */
    data: XOR<participantUpdateInput, participantUncheckedUpdateInput>
    /**
     * Choose, which participant to update.
     */
    where: participantWhereUniqueInput
  }

  /**
   * participant updateMany
   */
  export type participantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update participants.
     */
    data: XOR<participantUpdateManyMutationInput, participantUncheckedUpdateManyInput>
    /**
     * Filter which participants to update
     */
    where?: participantWhereInput
    /**
     * Limit how many participants to update.
     */
    limit?: number
  }

  /**
   * participant upsert
   */
  export type participantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
    /**
     * The filter to search for the participant to update in case it exists.
     */
    where: participantWhereUniqueInput
    /**
     * In case the participant found by the `where` argument doesn't exist, create a new participant with this data.
     */
    create: XOR<participantCreateInput, participantUncheckedCreateInput>
    /**
     * In case the participant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<participantUpdateInput, participantUncheckedUpdateInput>
  }

  /**
   * participant delete
   */
  export type participantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
    /**
     * Filter which participant to delete.
     */
    where: participantWhereUniqueInput
  }

  /**
   * participant deleteMany
   */
  export type participantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which participants to delete
     */
    where?: participantWhereInput
    /**
     * Limit how many participants to delete.
     */
    limit?: number
  }

  /**
   * participant without action
   */
  export type participantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    nickname: string | null
    state: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    nickname: string | null
    state: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    nickname: number
    state: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nickname?: true
    state?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nickname?: true
    state?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nickname?: true
    state?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    nickname: string
    state: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nickname?: boolean
    state?: boolean
    createdAt?: boolean
    participant?: boolean | user$participantArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    nickname?: boolean
    state?: boolean
    createdAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "nickname" | "state" | "createdAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | user$participantArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      participant: Prisma.$participantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      nickname: string
      state: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participant<T extends user$participantArgs<ExtArgs> = {}>(args?: Subset<T, user$participantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly nickname: FieldRef<"user", 'String'>
    readonly state: FieldRef<"user", 'Boolean'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.participant
   */
  export type user$participantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
    where?: participantWhereInput
    orderBy?: participantOrderByWithRelationInput | participantOrderByWithRelationInput[]
    cursor?: participantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
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


  export const EmotionscoreScalarFieldEnum: {
    id: 'id',
    meeting_id: 'meeting_id',
    created_at: 'created_at',
    score: 'score'
  };

  export type EmotionscoreScalarFieldEnum = (typeof EmotionscoreScalarFieldEnum)[keyof typeof EmotionscoreScalarFieldEnum]


  export const MeetingScalarFieldEnum: {
    id: 'id',
    title: 'title',
    created_at: 'created_at',
    delete_at: 'delete_at'
  };

  export type MeetingScalarFieldEnum = (typeof MeetingScalarFieldEnum)[keyof typeof MeetingScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    id: 'id',
    meeting_id: 'meeting_id',
    emotion_score_id: 'emotion_score_id',
    date: 'date',
    content: 'content'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const ParticipantScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    meeting_id: 'meeting_id',
    joined_at: 'joined_at',
    left_at: 'left_at'
  };

  export type ParticipantScalarFieldEnum = (typeof ParticipantScalarFieldEnum)[keyof typeof ParticipantScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    nickname: 'nickname',
    state: 'state',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const emotionscoreOrderByRelevanceFieldEnum: {
    id: 'id',
    meeting_id: 'meeting_id'
  };

  export type emotionscoreOrderByRelevanceFieldEnum = (typeof emotionscoreOrderByRelevanceFieldEnum)[keyof typeof emotionscoreOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const meetingOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type meetingOrderByRelevanceFieldEnum = (typeof meetingOrderByRelevanceFieldEnum)[keyof typeof meetingOrderByRelevanceFieldEnum]


  export const noteOrderByRelevanceFieldEnum: {
    id: 'id',
    meeting_id: 'meeting_id',
    emotion_score_id: 'emotion_score_id',
    content: 'content'
  };

  export type noteOrderByRelevanceFieldEnum = (typeof noteOrderByRelevanceFieldEnum)[keyof typeof noteOrderByRelevanceFieldEnum]


  export const participantOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    meeting_id: 'meeting_id'
  };

  export type participantOrderByRelevanceFieldEnum = (typeof participantOrderByRelevanceFieldEnum)[keyof typeof participantOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    nickname: 'nickname'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type emotionscoreWhereInput = {
    AND?: emotionscoreWhereInput | emotionscoreWhereInput[]
    OR?: emotionscoreWhereInput[]
    NOT?: emotionscoreWhereInput | emotionscoreWhereInput[]
    id?: StringFilter<"emotionscore"> | string
    meeting_id?: StringFilter<"emotionscore"> | string
    created_at?: DateTimeFilter<"emotionscore"> | Date | string
    score?: FloatFilter<"emotionscore"> | number
    meeting?: XOR<MeetingScalarRelationFilter, meetingWhereInput>
    note?: NoteListRelationFilter
  }

  export type emotionscoreOrderByWithRelationInput = {
    id?: SortOrder
    meeting_id?: SortOrder
    created_at?: SortOrder
    score?: SortOrder
    meeting?: meetingOrderByWithRelationInput
    note?: noteOrderByRelationAggregateInput
    _relevance?: emotionscoreOrderByRelevanceInput
  }

  export type emotionscoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: emotionscoreWhereInput | emotionscoreWhereInput[]
    OR?: emotionscoreWhereInput[]
    NOT?: emotionscoreWhereInput | emotionscoreWhereInput[]
    meeting_id?: StringFilter<"emotionscore"> | string
    created_at?: DateTimeFilter<"emotionscore"> | Date | string
    score?: FloatFilter<"emotionscore"> | number
    meeting?: XOR<MeetingScalarRelationFilter, meetingWhereInput>
    note?: NoteListRelationFilter
  }, "id">

  export type emotionscoreOrderByWithAggregationInput = {
    id?: SortOrder
    meeting_id?: SortOrder
    created_at?: SortOrder
    score?: SortOrder
    _count?: emotionscoreCountOrderByAggregateInput
    _avg?: emotionscoreAvgOrderByAggregateInput
    _max?: emotionscoreMaxOrderByAggregateInput
    _min?: emotionscoreMinOrderByAggregateInput
    _sum?: emotionscoreSumOrderByAggregateInput
  }

  export type emotionscoreScalarWhereWithAggregatesInput = {
    AND?: emotionscoreScalarWhereWithAggregatesInput | emotionscoreScalarWhereWithAggregatesInput[]
    OR?: emotionscoreScalarWhereWithAggregatesInput[]
    NOT?: emotionscoreScalarWhereWithAggregatesInput | emotionscoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"emotionscore"> | string
    meeting_id?: StringWithAggregatesFilter<"emotionscore"> | string
    created_at?: DateTimeWithAggregatesFilter<"emotionscore"> | Date | string
    score?: FloatWithAggregatesFilter<"emotionscore"> | number
  }

  export type meetingWhereInput = {
    AND?: meetingWhereInput | meetingWhereInput[]
    OR?: meetingWhereInput[]
    NOT?: meetingWhereInput | meetingWhereInput[]
    id?: StringFilter<"meeting"> | string
    title?: StringFilter<"meeting"> | string
    created_at?: DateTimeFilter<"meeting"> | Date | string
    delete_at?: DateTimeNullableFilter<"meeting"> | Date | string | null
    emotionscore?: EmotionscoreListRelationFilter
    note?: NoteListRelationFilter
    participant?: ParticipantListRelationFilter
  }

  export type meetingOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    delete_at?: SortOrderInput | SortOrder
    emotionscore?: emotionscoreOrderByRelationAggregateInput
    note?: noteOrderByRelationAggregateInput
    participant?: participantOrderByRelationAggregateInput
    _relevance?: meetingOrderByRelevanceInput
  }

  export type meetingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: meetingWhereInput | meetingWhereInput[]
    OR?: meetingWhereInput[]
    NOT?: meetingWhereInput | meetingWhereInput[]
    title?: StringFilter<"meeting"> | string
    created_at?: DateTimeFilter<"meeting"> | Date | string
    delete_at?: DateTimeNullableFilter<"meeting"> | Date | string | null
    emotionscore?: EmotionscoreListRelationFilter
    note?: NoteListRelationFilter
    participant?: ParticipantListRelationFilter
  }, "id">

  export type meetingOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    delete_at?: SortOrderInput | SortOrder
    _count?: meetingCountOrderByAggregateInput
    _max?: meetingMaxOrderByAggregateInput
    _min?: meetingMinOrderByAggregateInput
  }

  export type meetingScalarWhereWithAggregatesInput = {
    AND?: meetingScalarWhereWithAggregatesInput | meetingScalarWhereWithAggregatesInput[]
    OR?: meetingScalarWhereWithAggregatesInput[]
    NOT?: meetingScalarWhereWithAggregatesInput | meetingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"meeting"> | string
    title?: StringWithAggregatesFilter<"meeting"> | string
    created_at?: DateTimeWithAggregatesFilter<"meeting"> | Date | string
    delete_at?: DateTimeNullableWithAggregatesFilter<"meeting"> | Date | string | null
  }

  export type noteWhereInput = {
    AND?: noteWhereInput | noteWhereInput[]
    OR?: noteWhereInput[]
    NOT?: noteWhereInput | noteWhereInput[]
    id?: StringFilter<"note"> | string
    meeting_id?: StringFilter<"note"> | string
    emotion_score_id?: StringFilter<"note"> | string
    date?: DateTimeFilter<"note"> | Date | string
    content?: StringFilter<"note"> | string
    emotionscore?: XOR<EmotionscoreScalarRelationFilter, emotionscoreWhereInput>
    meeting?: XOR<MeetingScalarRelationFilter, meetingWhereInput>
  }

  export type noteOrderByWithRelationInput = {
    id?: SortOrder
    meeting_id?: SortOrder
    emotion_score_id?: SortOrder
    date?: SortOrder
    content?: SortOrder
    emotionscore?: emotionscoreOrderByWithRelationInput
    meeting?: meetingOrderByWithRelationInput
    _relevance?: noteOrderByRelevanceInput
  }

  export type noteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: noteWhereInput | noteWhereInput[]
    OR?: noteWhereInput[]
    NOT?: noteWhereInput | noteWhereInput[]
    meeting_id?: StringFilter<"note"> | string
    emotion_score_id?: StringFilter<"note"> | string
    date?: DateTimeFilter<"note"> | Date | string
    content?: StringFilter<"note"> | string
    emotionscore?: XOR<EmotionscoreScalarRelationFilter, emotionscoreWhereInput>
    meeting?: XOR<MeetingScalarRelationFilter, meetingWhereInput>
  }, "id">

  export type noteOrderByWithAggregationInput = {
    id?: SortOrder
    meeting_id?: SortOrder
    emotion_score_id?: SortOrder
    date?: SortOrder
    content?: SortOrder
    _count?: noteCountOrderByAggregateInput
    _max?: noteMaxOrderByAggregateInput
    _min?: noteMinOrderByAggregateInput
  }

  export type noteScalarWhereWithAggregatesInput = {
    AND?: noteScalarWhereWithAggregatesInput | noteScalarWhereWithAggregatesInput[]
    OR?: noteScalarWhereWithAggregatesInput[]
    NOT?: noteScalarWhereWithAggregatesInput | noteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"note"> | string
    meeting_id?: StringWithAggregatesFilter<"note"> | string
    emotion_score_id?: StringWithAggregatesFilter<"note"> | string
    date?: DateTimeWithAggregatesFilter<"note"> | Date | string
    content?: StringWithAggregatesFilter<"note"> | string
  }

  export type participantWhereInput = {
    AND?: participantWhereInput | participantWhereInput[]
    OR?: participantWhereInput[]
    NOT?: participantWhereInput | participantWhereInput[]
    id?: StringFilter<"participant"> | string
    user_id?: StringFilter<"participant"> | string
    meeting_id?: StringFilter<"participant"> | string
    joined_at?: DateTimeFilter<"participant"> | Date | string
    left_at?: DateTimeNullableFilter<"participant"> | Date | string | null
    meeting?: XOR<MeetingScalarRelationFilter, meetingWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type participantOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    meeting_id?: SortOrder
    joined_at?: SortOrder
    left_at?: SortOrderInput | SortOrder
    meeting?: meetingOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    _relevance?: participantOrderByRelevanceInput
  }

  export type participantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: participantWhereInput | participantWhereInput[]
    OR?: participantWhereInput[]
    NOT?: participantWhereInput | participantWhereInput[]
    user_id?: StringFilter<"participant"> | string
    meeting_id?: StringFilter<"participant"> | string
    joined_at?: DateTimeFilter<"participant"> | Date | string
    left_at?: DateTimeNullableFilter<"participant"> | Date | string | null
    meeting?: XOR<MeetingScalarRelationFilter, meetingWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type participantOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    meeting_id?: SortOrder
    joined_at?: SortOrder
    left_at?: SortOrderInput | SortOrder
    _count?: participantCountOrderByAggregateInput
    _max?: participantMaxOrderByAggregateInput
    _min?: participantMinOrderByAggregateInput
  }

  export type participantScalarWhereWithAggregatesInput = {
    AND?: participantScalarWhereWithAggregatesInput | participantScalarWhereWithAggregatesInput[]
    OR?: participantScalarWhereWithAggregatesInput[]
    NOT?: participantScalarWhereWithAggregatesInput | participantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"participant"> | string
    user_id?: StringWithAggregatesFilter<"participant"> | string
    meeting_id?: StringWithAggregatesFilter<"participant"> | string
    joined_at?: DateTimeWithAggregatesFilter<"participant"> | Date | string
    left_at?: DateTimeNullableWithAggregatesFilter<"participant"> | Date | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    nickname?: StringFilter<"user"> | string
    state?: BoolFilter<"user"> | boolean
    createdAt?: DateTimeFilter<"user"> | Date | string
    participant?: ParticipantListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
    participant?: participantOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    nickname?: StringFilter<"user"> | string
    state?: BoolFilter<"user"> | boolean
    createdAt?: DateTimeFilter<"user"> | Date | string
    participant?: ParticipantListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    nickname?: StringWithAggregatesFilter<"user"> | string
    state?: BoolWithAggregatesFilter<"user"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type emotionscoreCreateInput = {
    id: string
    created_at?: Date | string
    score: number
    meeting: meetingCreateNestedOneWithoutEmotionscoreInput
    note?: noteCreateNestedManyWithoutEmotionscoreInput
  }

  export type emotionscoreUncheckedCreateInput = {
    id: string
    meeting_id: string
    created_at?: Date | string
    score: number
    note?: noteUncheckedCreateNestedManyWithoutEmotionscoreInput
  }

  export type emotionscoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    meeting?: meetingUpdateOneRequiredWithoutEmotionscoreNestedInput
    note?: noteUpdateManyWithoutEmotionscoreNestedInput
  }

  export type emotionscoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meeting_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    note?: noteUncheckedUpdateManyWithoutEmotionscoreNestedInput
  }

  export type emotionscoreCreateManyInput = {
    id: string
    meeting_id: string
    created_at?: Date | string
    score: number
  }

  export type emotionscoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type emotionscoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    meeting_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type meetingCreateInput = {
    id: string
    title: string
    created_at?: Date | string
    delete_at?: Date | string | null
    emotionscore?: emotionscoreCreateNestedManyWithoutMeetingInput
    note?: noteCreateNestedManyWithoutMeetingInput
    participant?: participantCreateNestedManyWithoutMeetingInput
  }

  export type meetingUncheckedCreateInput = {
    id: string
    title: string
    created_at?: Date | string
    delete_at?: Date | string | null
    emotionscore?: emotionscoreUncheckedCreateNestedManyWithoutMeetingInput
    note?: noteUncheckedCreateNestedManyWithoutMeetingInput
    participant?: participantUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type meetingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delete_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emotionscore?: emotionscoreUpdateManyWithoutMeetingNestedInput
    note?: noteUpdateManyWithoutMeetingNestedInput
    participant?: participantUpdateManyWithoutMeetingNestedInput
  }

  export type meetingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delete_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emotionscore?: emotionscoreUncheckedUpdateManyWithoutMeetingNestedInput
    note?: noteUncheckedUpdateManyWithoutMeetingNestedInput
    participant?: participantUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type meetingCreateManyInput = {
    id: string
    title: string
    created_at?: Date | string
    delete_at?: Date | string | null
  }

  export type meetingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delete_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delete_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type noteCreateInput = {
    id: string
    date: Date | string
    content: string
    emotionscore: emotionscoreCreateNestedOneWithoutNoteInput
    meeting: meetingCreateNestedOneWithoutNoteInput
  }

  export type noteUncheckedCreateInput = {
    id: string
    meeting_id: string
    emotion_score_id: string
    date: Date | string
    content: string
  }

  export type noteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    emotionscore?: emotionscoreUpdateOneRequiredWithoutNoteNestedInput
    meeting?: meetingUpdateOneRequiredWithoutNoteNestedInput
  }

  export type noteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meeting_id?: StringFieldUpdateOperationsInput | string
    emotion_score_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type noteCreateManyInput = {
    id: string
    meeting_id: string
    emotion_score_id: string
    date: Date | string
    content: string
  }

  export type noteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type noteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    meeting_id?: StringFieldUpdateOperationsInput | string
    emotion_score_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type participantCreateInput = {
    id: string
    joined_at: Date | string
    left_at?: Date | string | null
    meeting: meetingCreateNestedOneWithoutParticipantInput
    user: userCreateNestedOneWithoutParticipantInput
  }

  export type participantUncheckedCreateInput = {
    id: string
    user_id: string
    meeting_id: string
    joined_at: Date | string
    left_at?: Date | string | null
  }

  export type participantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meeting?: meetingUpdateOneRequiredWithoutParticipantNestedInput
    user?: userUpdateOneRequiredWithoutParticipantNestedInput
  }

  export type participantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    meeting_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type participantCreateManyInput = {
    id: string
    user_id: string
    meeting_id: string
    joined_at: Date | string
    left_at?: Date | string | null
  }

  export type participantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type participantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    meeting_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateInput = {
    id?: string
    email: string
    password: string
    nickname: string
    state: boolean
    createdAt?: Date | string
    participant?: participantCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    nickname: string
    state: boolean
    createdAt?: Date | string
    participant?: participantUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    state?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: participantUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    state?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: participantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    email: string
    password: string
    nickname: string
    state: boolean
    createdAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    state?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    state?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MeetingScalarRelationFilter = {
    is?: meetingWhereInput
    isNot?: meetingWhereInput
  }

  export type NoteListRelationFilter = {
    every?: noteWhereInput
    some?: noteWhereInput
    none?: noteWhereInput
  }

  export type noteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type emotionscoreOrderByRelevanceInput = {
    fields: emotionscoreOrderByRelevanceFieldEnum | emotionscoreOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type emotionscoreCountOrderByAggregateInput = {
    id?: SortOrder
    meeting_id?: SortOrder
    created_at?: SortOrder
    score?: SortOrder
  }

  export type emotionscoreAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type emotionscoreMaxOrderByAggregateInput = {
    id?: SortOrder
    meeting_id?: SortOrder
    created_at?: SortOrder
    score?: SortOrder
  }

  export type emotionscoreMinOrderByAggregateInput = {
    id?: SortOrder
    meeting_id?: SortOrder
    created_at?: SortOrder
    score?: SortOrder
  }

  export type emotionscoreSumOrderByAggregateInput = {
    score?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EmotionscoreListRelationFilter = {
    every?: emotionscoreWhereInput
    some?: emotionscoreWhereInput
    none?: emotionscoreWhereInput
  }

  export type ParticipantListRelationFilter = {
    every?: participantWhereInput
    some?: participantWhereInput
    none?: participantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type emotionscoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type participantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type meetingOrderByRelevanceInput = {
    fields: meetingOrderByRelevanceFieldEnum | meetingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type meetingCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    delete_at?: SortOrder
  }

  export type meetingMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    delete_at?: SortOrder
  }

  export type meetingMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    delete_at?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EmotionscoreScalarRelationFilter = {
    is?: emotionscoreWhereInput
    isNot?: emotionscoreWhereInput
  }

  export type noteOrderByRelevanceInput = {
    fields: noteOrderByRelevanceFieldEnum | noteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type noteCountOrderByAggregateInput = {
    id?: SortOrder
    meeting_id?: SortOrder
    emotion_score_id?: SortOrder
    date?: SortOrder
    content?: SortOrder
  }

  export type noteMaxOrderByAggregateInput = {
    id?: SortOrder
    meeting_id?: SortOrder
    emotion_score_id?: SortOrder
    date?: SortOrder
    content?: SortOrder
  }

  export type noteMinOrderByAggregateInput = {
    id?: SortOrder
    meeting_id?: SortOrder
    emotion_score_id?: SortOrder
    date?: SortOrder
    content?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type participantOrderByRelevanceInput = {
    fields: participantOrderByRelevanceFieldEnum | participantOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type participantCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    meeting_id?: SortOrder
    joined_at?: SortOrder
    left_at?: SortOrder
  }

  export type participantMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    meeting_id?: SortOrder
    joined_at?: SortOrder
    left_at?: SortOrder
  }

  export type participantMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    meeting_id?: SortOrder
    joined_at?: SortOrder
    left_at?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type meetingCreateNestedOneWithoutEmotionscoreInput = {
    create?: XOR<meetingCreateWithoutEmotionscoreInput, meetingUncheckedCreateWithoutEmotionscoreInput>
    connectOrCreate?: meetingCreateOrConnectWithoutEmotionscoreInput
    connect?: meetingWhereUniqueInput
  }

  export type noteCreateNestedManyWithoutEmotionscoreInput = {
    create?: XOR<noteCreateWithoutEmotionscoreInput, noteUncheckedCreateWithoutEmotionscoreInput> | noteCreateWithoutEmotionscoreInput[] | noteUncheckedCreateWithoutEmotionscoreInput[]
    connectOrCreate?: noteCreateOrConnectWithoutEmotionscoreInput | noteCreateOrConnectWithoutEmotionscoreInput[]
    createMany?: noteCreateManyEmotionscoreInputEnvelope
    connect?: noteWhereUniqueInput | noteWhereUniqueInput[]
  }

  export type noteUncheckedCreateNestedManyWithoutEmotionscoreInput = {
    create?: XOR<noteCreateWithoutEmotionscoreInput, noteUncheckedCreateWithoutEmotionscoreInput> | noteCreateWithoutEmotionscoreInput[] | noteUncheckedCreateWithoutEmotionscoreInput[]
    connectOrCreate?: noteCreateOrConnectWithoutEmotionscoreInput | noteCreateOrConnectWithoutEmotionscoreInput[]
    createMany?: noteCreateManyEmotionscoreInputEnvelope
    connect?: noteWhereUniqueInput | noteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type meetingUpdateOneRequiredWithoutEmotionscoreNestedInput = {
    create?: XOR<meetingCreateWithoutEmotionscoreInput, meetingUncheckedCreateWithoutEmotionscoreInput>
    connectOrCreate?: meetingCreateOrConnectWithoutEmotionscoreInput
    upsert?: meetingUpsertWithoutEmotionscoreInput
    connect?: meetingWhereUniqueInput
    update?: XOR<XOR<meetingUpdateToOneWithWhereWithoutEmotionscoreInput, meetingUpdateWithoutEmotionscoreInput>, meetingUncheckedUpdateWithoutEmotionscoreInput>
  }

  export type noteUpdateManyWithoutEmotionscoreNestedInput = {
    create?: XOR<noteCreateWithoutEmotionscoreInput, noteUncheckedCreateWithoutEmotionscoreInput> | noteCreateWithoutEmotionscoreInput[] | noteUncheckedCreateWithoutEmotionscoreInput[]
    connectOrCreate?: noteCreateOrConnectWithoutEmotionscoreInput | noteCreateOrConnectWithoutEmotionscoreInput[]
    upsert?: noteUpsertWithWhereUniqueWithoutEmotionscoreInput | noteUpsertWithWhereUniqueWithoutEmotionscoreInput[]
    createMany?: noteCreateManyEmotionscoreInputEnvelope
    set?: noteWhereUniqueInput | noteWhereUniqueInput[]
    disconnect?: noteWhereUniqueInput | noteWhereUniqueInput[]
    delete?: noteWhereUniqueInput | noteWhereUniqueInput[]
    connect?: noteWhereUniqueInput | noteWhereUniqueInput[]
    update?: noteUpdateWithWhereUniqueWithoutEmotionscoreInput | noteUpdateWithWhereUniqueWithoutEmotionscoreInput[]
    updateMany?: noteUpdateManyWithWhereWithoutEmotionscoreInput | noteUpdateManyWithWhereWithoutEmotionscoreInput[]
    deleteMany?: noteScalarWhereInput | noteScalarWhereInput[]
  }

  export type noteUncheckedUpdateManyWithoutEmotionscoreNestedInput = {
    create?: XOR<noteCreateWithoutEmotionscoreInput, noteUncheckedCreateWithoutEmotionscoreInput> | noteCreateWithoutEmotionscoreInput[] | noteUncheckedCreateWithoutEmotionscoreInput[]
    connectOrCreate?: noteCreateOrConnectWithoutEmotionscoreInput | noteCreateOrConnectWithoutEmotionscoreInput[]
    upsert?: noteUpsertWithWhereUniqueWithoutEmotionscoreInput | noteUpsertWithWhereUniqueWithoutEmotionscoreInput[]
    createMany?: noteCreateManyEmotionscoreInputEnvelope
    set?: noteWhereUniqueInput | noteWhereUniqueInput[]
    disconnect?: noteWhereUniqueInput | noteWhereUniqueInput[]
    delete?: noteWhereUniqueInput | noteWhereUniqueInput[]
    connect?: noteWhereUniqueInput | noteWhereUniqueInput[]
    update?: noteUpdateWithWhereUniqueWithoutEmotionscoreInput | noteUpdateWithWhereUniqueWithoutEmotionscoreInput[]
    updateMany?: noteUpdateManyWithWhereWithoutEmotionscoreInput | noteUpdateManyWithWhereWithoutEmotionscoreInput[]
    deleteMany?: noteScalarWhereInput | noteScalarWhereInput[]
  }

  export type emotionscoreCreateNestedManyWithoutMeetingInput = {
    create?: XOR<emotionscoreCreateWithoutMeetingInput, emotionscoreUncheckedCreateWithoutMeetingInput> | emotionscoreCreateWithoutMeetingInput[] | emotionscoreUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: emotionscoreCreateOrConnectWithoutMeetingInput | emotionscoreCreateOrConnectWithoutMeetingInput[]
    createMany?: emotionscoreCreateManyMeetingInputEnvelope
    connect?: emotionscoreWhereUniqueInput | emotionscoreWhereUniqueInput[]
  }

  export type noteCreateNestedManyWithoutMeetingInput = {
    create?: XOR<noteCreateWithoutMeetingInput, noteUncheckedCreateWithoutMeetingInput> | noteCreateWithoutMeetingInput[] | noteUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: noteCreateOrConnectWithoutMeetingInput | noteCreateOrConnectWithoutMeetingInput[]
    createMany?: noteCreateManyMeetingInputEnvelope
    connect?: noteWhereUniqueInput | noteWhereUniqueInput[]
  }

  export type participantCreateNestedManyWithoutMeetingInput = {
    create?: XOR<participantCreateWithoutMeetingInput, participantUncheckedCreateWithoutMeetingInput> | participantCreateWithoutMeetingInput[] | participantUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: participantCreateOrConnectWithoutMeetingInput | participantCreateOrConnectWithoutMeetingInput[]
    createMany?: participantCreateManyMeetingInputEnvelope
    connect?: participantWhereUniqueInput | participantWhereUniqueInput[]
  }

  export type emotionscoreUncheckedCreateNestedManyWithoutMeetingInput = {
    create?: XOR<emotionscoreCreateWithoutMeetingInput, emotionscoreUncheckedCreateWithoutMeetingInput> | emotionscoreCreateWithoutMeetingInput[] | emotionscoreUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: emotionscoreCreateOrConnectWithoutMeetingInput | emotionscoreCreateOrConnectWithoutMeetingInput[]
    createMany?: emotionscoreCreateManyMeetingInputEnvelope
    connect?: emotionscoreWhereUniqueInput | emotionscoreWhereUniqueInput[]
  }

  export type noteUncheckedCreateNestedManyWithoutMeetingInput = {
    create?: XOR<noteCreateWithoutMeetingInput, noteUncheckedCreateWithoutMeetingInput> | noteCreateWithoutMeetingInput[] | noteUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: noteCreateOrConnectWithoutMeetingInput | noteCreateOrConnectWithoutMeetingInput[]
    createMany?: noteCreateManyMeetingInputEnvelope
    connect?: noteWhereUniqueInput | noteWhereUniqueInput[]
  }

  export type participantUncheckedCreateNestedManyWithoutMeetingInput = {
    create?: XOR<participantCreateWithoutMeetingInput, participantUncheckedCreateWithoutMeetingInput> | participantCreateWithoutMeetingInput[] | participantUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: participantCreateOrConnectWithoutMeetingInput | participantCreateOrConnectWithoutMeetingInput[]
    createMany?: participantCreateManyMeetingInputEnvelope
    connect?: participantWhereUniqueInput | participantWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type emotionscoreUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<emotionscoreCreateWithoutMeetingInput, emotionscoreUncheckedCreateWithoutMeetingInput> | emotionscoreCreateWithoutMeetingInput[] | emotionscoreUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: emotionscoreCreateOrConnectWithoutMeetingInput | emotionscoreCreateOrConnectWithoutMeetingInput[]
    upsert?: emotionscoreUpsertWithWhereUniqueWithoutMeetingInput | emotionscoreUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: emotionscoreCreateManyMeetingInputEnvelope
    set?: emotionscoreWhereUniqueInput | emotionscoreWhereUniqueInput[]
    disconnect?: emotionscoreWhereUniqueInput | emotionscoreWhereUniqueInput[]
    delete?: emotionscoreWhereUniqueInput | emotionscoreWhereUniqueInput[]
    connect?: emotionscoreWhereUniqueInput | emotionscoreWhereUniqueInput[]
    update?: emotionscoreUpdateWithWhereUniqueWithoutMeetingInput | emotionscoreUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: emotionscoreUpdateManyWithWhereWithoutMeetingInput | emotionscoreUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: emotionscoreScalarWhereInput | emotionscoreScalarWhereInput[]
  }

  export type noteUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<noteCreateWithoutMeetingInput, noteUncheckedCreateWithoutMeetingInput> | noteCreateWithoutMeetingInput[] | noteUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: noteCreateOrConnectWithoutMeetingInput | noteCreateOrConnectWithoutMeetingInput[]
    upsert?: noteUpsertWithWhereUniqueWithoutMeetingInput | noteUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: noteCreateManyMeetingInputEnvelope
    set?: noteWhereUniqueInput | noteWhereUniqueInput[]
    disconnect?: noteWhereUniqueInput | noteWhereUniqueInput[]
    delete?: noteWhereUniqueInput | noteWhereUniqueInput[]
    connect?: noteWhereUniqueInput | noteWhereUniqueInput[]
    update?: noteUpdateWithWhereUniqueWithoutMeetingInput | noteUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: noteUpdateManyWithWhereWithoutMeetingInput | noteUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: noteScalarWhereInput | noteScalarWhereInput[]
  }

  export type participantUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<participantCreateWithoutMeetingInput, participantUncheckedCreateWithoutMeetingInput> | participantCreateWithoutMeetingInput[] | participantUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: participantCreateOrConnectWithoutMeetingInput | participantCreateOrConnectWithoutMeetingInput[]
    upsert?: participantUpsertWithWhereUniqueWithoutMeetingInput | participantUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: participantCreateManyMeetingInputEnvelope
    set?: participantWhereUniqueInput | participantWhereUniqueInput[]
    disconnect?: participantWhereUniqueInput | participantWhereUniqueInput[]
    delete?: participantWhereUniqueInput | participantWhereUniqueInput[]
    connect?: participantWhereUniqueInput | participantWhereUniqueInput[]
    update?: participantUpdateWithWhereUniqueWithoutMeetingInput | participantUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: participantUpdateManyWithWhereWithoutMeetingInput | participantUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: participantScalarWhereInput | participantScalarWhereInput[]
  }

  export type emotionscoreUncheckedUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<emotionscoreCreateWithoutMeetingInput, emotionscoreUncheckedCreateWithoutMeetingInput> | emotionscoreCreateWithoutMeetingInput[] | emotionscoreUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: emotionscoreCreateOrConnectWithoutMeetingInput | emotionscoreCreateOrConnectWithoutMeetingInput[]
    upsert?: emotionscoreUpsertWithWhereUniqueWithoutMeetingInput | emotionscoreUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: emotionscoreCreateManyMeetingInputEnvelope
    set?: emotionscoreWhereUniqueInput | emotionscoreWhereUniqueInput[]
    disconnect?: emotionscoreWhereUniqueInput | emotionscoreWhereUniqueInput[]
    delete?: emotionscoreWhereUniqueInput | emotionscoreWhereUniqueInput[]
    connect?: emotionscoreWhereUniqueInput | emotionscoreWhereUniqueInput[]
    update?: emotionscoreUpdateWithWhereUniqueWithoutMeetingInput | emotionscoreUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: emotionscoreUpdateManyWithWhereWithoutMeetingInput | emotionscoreUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: emotionscoreScalarWhereInput | emotionscoreScalarWhereInput[]
  }

  export type noteUncheckedUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<noteCreateWithoutMeetingInput, noteUncheckedCreateWithoutMeetingInput> | noteCreateWithoutMeetingInput[] | noteUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: noteCreateOrConnectWithoutMeetingInput | noteCreateOrConnectWithoutMeetingInput[]
    upsert?: noteUpsertWithWhereUniqueWithoutMeetingInput | noteUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: noteCreateManyMeetingInputEnvelope
    set?: noteWhereUniqueInput | noteWhereUniqueInput[]
    disconnect?: noteWhereUniqueInput | noteWhereUniqueInput[]
    delete?: noteWhereUniqueInput | noteWhereUniqueInput[]
    connect?: noteWhereUniqueInput | noteWhereUniqueInput[]
    update?: noteUpdateWithWhereUniqueWithoutMeetingInput | noteUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: noteUpdateManyWithWhereWithoutMeetingInput | noteUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: noteScalarWhereInput | noteScalarWhereInput[]
  }

  export type participantUncheckedUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<participantCreateWithoutMeetingInput, participantUncheckedCreateWithoutMeetingInput> | participantCreateWithoutMeetingInput[] | participantUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: participantCreateOrConnectWithoutMeetingInput | participantCreateOrConnectWithoutMeetingInput[]
    upsert?: participantUpsertWithWhereUniqueWithoutMeetingInput | participantUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: participantCreateManyMeetingInputEnvelope
    set?: participantWhereUniqueInput | participantWhereUniqueInput[]
    disconnect?: participantWhereUniqueInput | participantWhereUniqueInput[]
    delete?: participantWhereUniqueInput | participantWhereUniqueInput[]
    connect?: participantWhereUniqueInput | participantWhereUniqueInput[]
    update?: participantUpdateWithWhereUniqueWithoutMeetingInput | participantUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: participantUpdateManyWithWhereWithoutMeetingInput | participantUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: participantScalarWhereInput | participantScalarWhereInput[]
  }

  export type emotionscoreCreateNestedOneWithoutNoteInput = {
    create?: XOR<emotionscoreCreateWithoutNoteInput, emotionscoreUncheckedCreateWithoutNoteInput>
    connectOrCreate?: emotionscoreCreateOrConnectWithoutNoteInput
    connect?: emotionscoreWhereUniqueInput
  }

  export type meetingCreateNestedOneWithoutNoteInput = {
    create?: XOR<meetingCreateWithoutNoteInput, meetingUncheckedCreateWithoutNoteInput>
    connectOrCreate?: meetingCreateOrConnectWithoutNoteInput
    connect?: meetingWhereUniqueInput
  }

  export type emotionscoreUpdateOneRequiredWithoutNoteNestedInput = {
    create?: XOR<emotionscoreCreateWithoutNoteInput, emotionscoreUncheckedCreateWithoutNoteInput>
    connectOrCreate?: emotionscoreCreateOrConnectWithoutNoteInput
    upsert?: emotionscoreUpsertWithoutNoteInput
    connect?: emotionscoreWhereUniqueInput
    update?: XOR<XOR<emotionscoreUpdateToOneWithWhereWithoutNoteInput, emotionscoreUpdateWithoutNoteInput>, emotionscoreUncheckedUpdateWithoutNoteInput>
  }

  export type meetingUpdateOneRequiredWithoutNoteNestedInput = {
    create?: XOR<meetingCreateWithoutNoteInput, meetingUncheckedCreateWithoutNoteInput>
    connectOrCreate?: meetingCreateOrConnectWithoutNoteInput
    upsert?: meetingUpsertWithoutNoteInput
    connect?: meetingWhereUniqueInput
    update?: XOR<XOR<meetingUpdateToOneWithWhereWithoutNoteInput, meetingUpdateWithoutNoteInput>, meetingUncheckedUpdateWithoutNoteInput>
  }

  export type meetingCreateNestedOneWithoutParticipantInput = {
    create?: XOR<meetingCreateWithoutParticipantInput, meetingUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: meetingCreateOrConnectWithoutParticipantInput
    connect?: meetingWhereUniqueInput
  }

  export type userCreateNestedOneWithoutParticipantInput = {
    create?: XOR<userCreateWithoutParticipantInput, userUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: userCreateOrConnectWithoutParticipantInput
    connect?: userWhereUniqueInput
  }

  export type meetingUpdateOneRequiredWithoutParticipantNestedInput = {
    create?: XOR<meetingCreateWithoutParticipantInput, meetingUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: meetingCreateOrConnectWithoutParticipantInput
    upsert?: meetingUpsertWithoutParticipantInput
    connect?: meetingWhereUniqueInput
    update?: XOR<XOR<meetingUpdateToOneWithWhereWithoutParticipantInput, meetingUpdateWithoutParticipantInput>, meetingUncheckedUpdateWithoutParticipantInput>
  }

  export type userUpdateOneRequiredWithoutParticipantNestedInput = {
    create?: XOR<userCreateWithoutParticipantInput, userUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: userCreateOrConnectWithoutParticipantInput
    upsert?: userUpsertWithoutParticipantInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutParticipantInput, userUpdateWithoutParticipantInput>, userUncheckedUpdateWithoutParticipantInput>
  }

  export type participantCreateNestedManyWithoutUserInput = {
    create?: XOR<participantCreateWithoutUserInput, participantUncheckedCreateWithoutUserInput> | participantCreateWithoutUserInput[] | participantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: participantCreateOrConnectWithoutUserInput | participantCreateOrConnectWithoutUserInput[]
    createMany?: participantCreateManyUserInputEnvelope
    connect?: participantWhereUniqueInput | participantWhereUniqueInput[]
  }

  export type participantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<participantCreateWithoutUserInput, participantUncheckedCreateWithoutUserInput> | participantCreateWithoutUserInput[] | participantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: participantCreateOrConnectWithoutUserInput | participantCreateOrConnectWithoutUserInput[]
    createMany?: participantCreateManyUserInputEnvelope
    connect?: participantWhereUniqueInput | participantWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type participantUpdateManyWithoutUserNestedInput = {
    create?: XOR<participantCreateWithoutUserInput, participantUncheckedCreateWithoutUserInput> | participantCreateWithoutUserInput[] | participantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: participantCreateOrConnectWithoutUserInput | participantCreateOrConnectWithoutUserInput[]
    upsert?: participantUpsertWithWhereUniqueWithoutUserInput | participantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: participantCreateManyUserInputEnvelope
    set?: participantWhereUniqueInput | participantWhereUniqueInput[]
    disconnect?: participantWhereUniqueInput | participantWhereUniqueInput[]
    delete?: participantWhereUniqueInput | participantWhereUniqueInput[]
    connect?: participantWhereUniqueInput | participantWhereUniqueInput[]
    update?: participantUpdateWithWhereUniqueWithoutUserInput | participantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: participantUpdateManyWithWhereWithoutUserInput | participantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: participantScalarWhereInput | participantScalarWhereInput[]
  }

  export type participantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<participantCreateWithoutUserInput, participantUncheckedCreateWithoutUserInput> | participantCreateWithoutUserInput[] | participantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: participantCreateOrConnectWithoutUserInput | participantCreateOrConnectWithoutUserInput[]
    upsert?: participantUpsertWithWhereUniqueWithoutUserInput | participantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: participantCreateManyUserInputEnvelope
    set?: participantWhereUniqueInput | participantWhereUniqueInput[]
    disconnect?: participantWhereUniqueInput | participantWhereUniqueInput[]
    delete?: participantWhereUniqueInput | participantWhereUniqueInput[]
    connect?: participantWhereUniqueInput | participantWhereUniqueInput[]
    update?: participantUpdateWithWhereUniqueWithoutUserInput | participantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: participantUpdateManyWithWhereWithoutUserInput | participantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: participantScalarWhereInput | participantScalarWhereInput[]
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type meetingCreateWithoutEmotionscoreInput = {
    id: string
    title: string
    created_at?: Date | string
    delete_at?: Date | string | null
    note?: noteCreateNestedManyWithoutMeetingInput
    participant?: participantCreateNestedManyWithoutMeetingInput
  }

  export type meetingUncheckedCreateWithoutEmotionscoreInput = {
    id: string
    title: string
    created_at?: Date | string
    delete_at?: Date | string | null
    note?: noteUncheckedCreateNestedManyWithoutMeetingInput
    participant?: participantUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type meetingCreateOrConnectWithoutEmotionscoreInput = {
    where: meetingWhereUniqueInput
    create: XOR<meetingCreateWithoutEmotionscoreInput, meetingUncheckedCreateWithoutEmotionscoreInput>
  }

  export type noteCreateWithoutEmotionscoreInput = {
    id: string
    date: Date | string
    content: string
    meeting: meetingCreateNestedOneWithoutNoteInput
  }

  export type noteUncheckedCreateWithoutEmotionscoreInput = {
    id: string
    meeting_id: string
    date: Date | string
    content: string
  }

  export type noteCreateOrConnectWithoutEmotionscoreInput = {
    where: noteWhereUniqueInput
    create: XOR<noteCreateWithoutEmotionscoreInput, noteUncheckedCreateWithoutEmotionscoreInput>
  }

  export type noteCreateManyEmotionscoreInputEnvelope = {
    data: noteCreateManyEmotionscoreInput | noteCreateManyEmotionscoreInput[]
    skipDuplicates?: boolean
  }

  export type meetingUpsertWithoutEmotionscoreInput = {
    update: XOR<meetingUpdateWithoutEmotionscoreInput, meetingUncheckedUpdateWithoutEmotionscoreInput>
    create: XOR<meetingCreateWithoutEmotionscoreInput, meetingUncheckedCreateWithoutEmotionscoreInput>
    where?: meetingWhereInput
  }

  export type meetingUpdateToOneWithWhereWithoutEmotionscoreInput = {
    where?: meetingWhereInput
    data: XOR<meetingUpdateWithoutEmotionscoreInput, meetingUncheckedUpdateWithoutEmotionscoreInput>
  }

  export type meetingUpdateWithoutEmotionscoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delete_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: noteUpdateManyWithoutMeetingNestedInput
    participant?: participantUpdateManyWithoutMeetingNestedInput
  }

  export type meetingUncheckedUpdateWithoutEmotionscoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delete_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: noteUncheckedUpdateManyWithoutMeetingNestedInput
    participant?: participantUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type noteUpsertWithWhereUniqueWithoutEmotionscoreInput = {
    where: noteWhereUniqueInput
    update: XOR<noteUpdateWithoutEmotionscoreInput, noteUncheckedUpdateWithoutEmotionscoreInput>
    create: XOR<noteCreateWithoutEmotionscoreInput, noteUncheckedCreateWithoutEmotionscoreInput>
  }

  export type noteUpdateWithWhereUniqueWithoutEmotionscoreInput = {
    where: noteWhereUniqueInput
    data: XOR<noteUpdateWithoutEmotionscoreInput, noteUncheckedUpdateWithoutEmotionscoreInput>
  }

  export type noteUpdateManyWithWhereWithoutEmotionscoreInput = {
    where: noteScalarWhereInput
    data: XOR<noteUpdateManyMutationInput, noteUncheckedUpdateManyWithoutEmotionscoreInput>
  }

  export type noteScalarWhereInput = {
    AND?: noteScalarWhereInput | noteScalarWhereInput[]
    OR?: noteScalarWhereInput[]
    NOT?: noteScalarWhereInput | noteScalarWhereInput[]
    id?: StringFilter<"note"> | string
    meeting_id?: StringFilter<"note"> | string
    emotion_score_id?: StringFilter<"note"> | string
    date?: DateTimeFilter<"note"> | Date | string
    content?: StringFilter<"note"> | string
  }

  export type emotionscoreCreateWithoutMeetingInput = {
    id: string
    created_at?: Date | string
    score: number
    note?: noteCreateNestedManyWithoutEmotionscoreInput
  }

  export type emotionscoreUncheckedCreateWithoutMeetingInput = {
    id: string
    created_at?: Date | string
    score: number
    note?: noteUncheckedCreateNestedManyWithoutEmotionscoreInput
  }

  export type emotionscoreCreateOrConnectWithoutMeetingInput = {
    where: emotionscoreWhereUniqueInput
    create: XOR<emotionscoreCreateWithoutMeetingInput, emotionscoreUncheckedCreateWithoutMeetingInput>
  }

  export type emotionscoreCreateManyMeetingInputEnvelope = {
    data: emotionscoreCreateManyMeetingInput | emotionscoreCreateManyMeetingInput[]
    skipDuplicates?: boolean
  }

  export type noteCreateWithoutMeetingInput = {
    id: string
    date: Date | string
    content: string
    emotionscore: emotionscoreCreateNestedOneWithoutNoteInput
  }

  export type noteUncheckedCreateWithoutMeetingInput = {
    id: string
    emotion_score_id: string
    date: Date | string
    content: string
  }

  export type noteCreateOrConnectWithoutMeetingInput = {
    where: noteWhereUniqueInput
    create: XOR<noteCreateWithoutMeetingInput, noteUncheckedCreateWithoutMeetingInput>
  }

  export type noteCreateManyMeetingInputEnvelope = {
    data: noteCreateManyMeetingInput | noteCreateManyMeetingInput[]
    skipDuplicates?: boolean
  }

  export type participantCreateWithoutMeetingInput = {
    id: string
    joined_at: Date | string
    left_at?: Date | string | null
    user: userCreateNestedOneWithoutParticipantInput
  }

  export type participantUncheckedCreateWithoutMeetingInput = {
    id: string
    user_id: string
    joined_at: Date | string
    left_at?: Date | string | null
  }

  export type participantCreateOrConnectWithoutMeetingInput = {
    where: participantWhereUniqueInput
    create: XOR<participantCreateWithoutMeetingInput, participantUncheckedCreateWithoutMeetingInput>
  }

  export type participantCreateManyMeetingInputEnvelope = {
    data: participantCreateManyMeetingInput | participantCreateManyMeetingInput[]
    skipDuplicates?: boolean
  }

  export type emotionscoreUpsertWithWhereUniqueWithoutMeetingInput = {
    where: emotionscoreWhereUniqueInput
    update: XOR<emotionscoreUpdateWithoutMeetingInput, emotionscoreUncheckedUpdateWithoutMeetingInput>
    create: XOR<emotionscoreCreateWithoutMeetingInput, emotionscoreUncheckedCreateWithoutMeetingInput>
  }

  export type emotionscoreUpdateWithWhereUniqueWithoutMeetingInput = {
    where: emotionscoreWhereUniqueInput
    data: XOR<emotionscoreUpdateWithoutMeetingInput, emotionscoreUncheckedUpdateWithoutMeetingInput>
  }

  export type emotionscoreUpdateManyWithWhereWithoutMeetingInput = {
    where: emotionscoreScalarWhereInput
    data: XOR<emotionscoreUpdateManyMutationInput, emotionscoreUncheckedUpdateManyWithoutMeetingInput>
  }

  export type emotionscoreScalarWhereInput = {
    AND?: emotionscoreScalarWhereInput | emotionscoreScalarWhereInput[]
    OR?: emotionscoreScalarWhereInput[]
    NOT?: emotionscoreScalarWhereInput | emotionscoreScalarWhereInput[]
    id?: StringFilter<"emotionscore"> | string
    meeting_id?: StringFilter<"emotionscore"> | string
    created_at?: DateTimeFilter<"emotionscore"> | Date | string
    score?: FloatFilter<"emotionscore"> | number
  }

  export type noteUpsertWithWhereUniqueWithoutMeetingInput = {
    where: noteWhereUniqueInput
    update: XOR<noteUpdateWithoutMeetingInput, noteUncheckedUpdateWithoutMeetingInput>
    create: XOR<noteCreateWithoutMeetingInput, noteUncheckedCreateWithoutMeetingInput>
  }

  export type noteUpdateWithWhereUniqueWithoutMeetingInput = {
    where: noteWhereUniqueInput
    data: XOR<noteUpdateWithoutMeetingInput, noteUncheckedUpdateWithoutMeetingInput>
  }

  export type noteUpdateManyWithWhereWithoutMeetingInput = {
    where: noteScalarWhereInput
    data: XOR<noteUpdateManyMutationInput, noteUncheckedUpdateManyWithoutMeetingInput>
  }

  export type participantUpsertWithWhereUniqueWithoutMeetingInput = {
    where: participantWhereUniqueInput
    update: XOR<participantUpdateWithoutMeetingInput, participantUncheckedUpdateWithoutMeetingInput>
    create: XOR<participantCreateWithoutMeetingInput, participantUncheckedCreateWithoutMeetingInput>
  }

  export type participantUpdateWithWhereUniqueWithoutMeetingInput = {
    where: participantWhereUniqueInput
    data: XOR<participantUpdateWithoutMeetingInput, participantUncheckedUpdateWithoutMeetingInput>
  }

  export type participantUpdateManyWithWhereWithoutMeetingInput = {
    where: participantScalarWhereInput
    data: XOR<participantUpdateManyMutationInput, participantUncheckedUpdateManyWithoutMeetingInput>
  }

  export type participantScalarWhereInput = {
    AND?: participantScalarWhereInput | participantScalarWhereInput[]
    OR?: participantScalarWhereInput[]
    NOT?: participantScalarWhereInput | participantScalarWhereInput[]
    id?: StringFilter<"participant"> | string
    user_id?: StringFilter<"participant"> | string
    meeting_id?: StringFilter<"participant"> | string
    joined_at?: DateTimeFilter<"participant"> | Date | string
    left_at?: DateTimeNullableFilter<"participant"> | Date | string | null
  }

  export type emotionscoreCreateWithoutNoteInput = {
    id: string
    created_at?: Date | string
    score: number
    meeting: meetingCreateNestedOneWithoutEmotionscoreInput
  }

  export type emotionscoreUncheckedCreateWithoutNoteInput = {
    id: string
    meeting_id: string
    created_at?: Date | string
    score: number
  }

  export type emotionscoreCreateOrConnectWithoutNoteInput = {
    where: emotionscoreWhereUniqueInput
    create: XOR<emotionscoreCreateWithoutNoteInput, emotionscoreUncheckedCreateWithoutNoteInput>
  }

  export type meetingCreateWithoutNoteInput = {
    id: string
    title: string
    created_at?: Date | string
    delete_at?: Date | string | null
    emotionscore?: emotionscoreCreateNestedManyWithoutMeetingInput
    participant?: participantCreateNestedManyWithoutMeetingInput
  }

  export type meetingUncheckedCreateWithoutNoteInput = {
    id: string
    title: string
    created_at?: Date | string
    delete_at?: Date | string | null
    emotionscore?: emotionscoreUncheckedCreateNestedManyWithoutMeetingInput
    participant?: participantUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type meetingCreateOrConnectWithoutNoteInput = {
    where: meetingWhereUniqueInput
    create: XOR<meetingCreateWithoutNoteInput, meetingUncheckedCreateWithoutNoteInput>
  }

  export type emotionscoreUpsertWithoutNoteInput = {
    update: XOR<emotionscoreUpdateWithoutNoteInput, emotionscoreUncheckedUpdateWithoutNoteInput>
    create: XOR<emotionscoreCreateWithoutNoteInput, emotionscoreUncheckedCreateWithoutNoteInput>
    where?: emotionscoreWhereInput
  }

  export type emotionscoreUpdateToOneWithWhereWithoutNoteInput = {
    where?: emotionscoreWhereInput
    data: XOR<emotionscoreUpdateWithoutNoteInput, emotionscoreUncheckedUpdateWithoutNoteInput>
  }

  export type emotionscoreUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    meeting?: meetingUpdateOneRequiredWithoutEmotionscoreNestedInput
  }

  export type emotionscoreUncheckedUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    meeting_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type meetingUpsertWithoutNoteInput = {
    update: XOR<meetingUpdateWithoutNoteInput, meetingUncheckedUpdateWithoutNoteInput>
    create: XOR<meetingCreateWithoutNoteInput, meetingUncheckedCreateWithoutNoteInput>
    where?: meetingWhereInput
  }

  export type meetingUpdateToOneWithWhereWithoutNoteInput = {
    where?: meetingWhereInput
    data: XOR<meetingUpdateWithoutNoteInput, meetingUncheckedUpdateWithoutNoteInput>
  }

  export type meetingUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delete_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emotionscore?: emotionscoreUpdateManyWithoutMeetingNestedInput
    participant?: participantUpdateManyWithoutMeetingNestedInput
  }

  export type meetingUncheckedUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delete_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emotionscore?: emotionscoreUncheckedUpdateManyWithoutMeetingNestedInput
    participant?: participantUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type meetingCreateWithoutParticipantInput = {
    id: string
    title: string
    created_at?: Date | string
    delete_at?: Date | string | null
    emotionscore?: emotionscoreCreateNestedManyWithoutMeetingInput
    note?: noteCreateNestedManyWithoutMeetingInput
  }

  export type meetingUncheckedCreateWithoutParticipantInput = {
    id: string
    title: string
    created_at?: Date | string
    delete_at?: Date | string | null
    emotionscore?: emotionscoreUncheckedCreateNestedManyWithoutMeetingInput
    note?: noteUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type meetingCreateOrConnectWithoutParticipantInput = {
    where: meetingWhereUniqueInput
    create: XOR<meetingCreateWithoutParticipantInput, meetingUncheckedCreateWithoutParticipantInput>
  }

  export type userCreateWithoutParticipantInput = {
    id?: string
    email: string
    password: string
    nickname: string
    state: boolean
    createdAt?: Date | string
  }

  export type userUncheckedCreateWithoutParticipantInput = {
    id?: string
    email: string
    password: string
    nickname: string
    state: boolean
    createdAt?: Date | string
  }

  export type userCreateOrConnectWithoutParticipantInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutParticipantInput, userUncheckedCreateWithoutParticipantInput>
  }

  export type meetingUpsertWithoutParticipantInput = {
    update: XOR<meetingUpdateWithoutParticipantInput, meetingUncheckedUpdateWithoutParticipantInput>
    create: XOR<meetingCreateWithoutParticipantInput, meetingUncheckedCreateWithoutParticipantInput>
    where?: meetingWhereInput
  }

  export type meetingUpdateToOneWithWhereWithoutParticipantInput = {
    where?: meetingWhereInput
    data: XOR<meetingUpdateWithoutParticipantInput, meetingUncheckedUpdateWithoutParticipantInput>
  }

  export type meetingUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delete_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emotionscore?: emotionscoreUpdateManyWithoutMeetingNestedInput
    note?: noteUpdateManyWithoutMeetingNestedInput
  }

  export type meetingUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    delete_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emotionscore?: emotionscoreUncheckedUpdateManyWithoutMeetingNestedInput
    note?: noteUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type userUpsertWithoutParticipantInput = {
    update: XOR<userUpdateWithoutParticipantInput, userUncheckedUpdateWithoutParticipantInput>
    create: XOR<userCreateWithoutParticipantInput, userUncheckedCreateWithoutParticipantInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutParticipantInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutParticipantInput, userUncheckedUpdateWithoutParticipantInput>
  }

  export type userUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    state?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    state?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type participantCreateWithoutUserInput = {
    id: string
    joined_at: Date | string
    left_at?: Date | string | null
    meeting: meetingCreateNestedOneWithoutParticipantInput
  }

  export type participantUncheckedCreateWithoutUserInput = {
    id: string
    meeting_id: string
    joined_at: Date | string
    left_at?: Date | string | null
  }

  export type participantCreateOrConnectWithoutUserInput = {
    where: participantWhereUniqueInput
    create: XOR<participantCreateWithoutUserInput, participantUncheckedCreateWithoutUserInput>
  }

  export type participantCreateManyUserInputEnvelope = {
    data: participantCreateManyUserInput | participantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type participantUpsertWithWhereUniqueWithoutUserInput = {
    where: participantWhereUniqueInput
    update: XOR<participantUpdateWithoutUserInput, participantUncheckedUpdateWithoutUserInput>
    create: XOR<participantCreateWithoutUserInput, participantUncheckedCreateWithoutUserInput>
  }

  export type participantUpdateWithWhereUniqueWithoutUserInput = {
    where: participantWhereUniqueInput
    data: XOR<participantUpdateWithoutUserInput, participantUncheckedUpdateWithoutUserInput>
  }

  export type participantUpdateManyWithWhereWithoutUserInput = {
    where: participantScalarWhereInput
    data: XOR<participantUpdateManyMutationInput, participantUncheckedUpdateManyWithoutUserInput>
  }

  export type noteCreateManyEmotionscoreInput = {
    id: string
    meeting_id: string
    date: Date | string
    content: string
  }

  export type noteUpdateWithoutEmotionscoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    meeting?: meetingUpdateOneRequiredWithoutNoteNestedInput
  }

  export type noteUncheckedUpdateWithoutEmotionscoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    meeting_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type noteUncheckedUpdateManyWithoutEmotionscoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    meeting_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type emotionscoreCreateManyMeetingInput = {
    id: string
    created_at?: Date | string
    score: number
  }

  export type noteCreateManyMeetingInput = {
    id: string
    emotion_score_id: string
    date: Date | string
    content: string
  }

  export type participantCreateManyMeetingInput = {
    id: string
    user_id: string
    joined_at: Date | string
    left_at?: Date | string | null
  }

  export type emotionscoreUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    note?: noteUpdateManyWithoutEmotionscoreNestedInput
  }

  export type emotionscoreUncheckedUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    note?: noteUncheckedUpdateManyWithoutEmotionscoreNestedInput
  }

  export type emotionscoreUncheckedUpdateManyWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type noteUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    emotionscore?: emotionscoreUpdateOneRequiredWithoutNoteNestedInput
  }

  export type noteUncheckedUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    emotion_score_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type noteUncheckedUpdateManyWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    emotion_score_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type participantUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutParticipantNestedInput
  }

  export type participantUncheckedUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type participantUncheckedUpdateManyWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type participantCreateManyUserInput = {
    id: string
    meeting_id: string
    joined_at: Date | string
    left_at?: Date | string | null
  }

  export type participantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meeting?: meetingUpdateOneRequiredWithoutParticipantNestedInput
  }

  export type participantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    meeting_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type participantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    meeting_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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