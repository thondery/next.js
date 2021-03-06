/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

import React from 'react'
import { ParsedUrlQuery } from 'querystring'
import { IncomingMessage, ServerResponse } from 'http'

import {
  NextPageContext,
  NextComponentType,
  NextApiResponse,
  NextApiRequest,
  NextApiHandler,
  // @ts-ignore This path is generated at build time and conflicts otherwise
} from '../dist/next-server/lib/utils'

// @ts-ignore This path is generated at build time and conflicts otherwise
import next from '../dist/server/next'

// Extend the React types with missing properties
declare module 'react' {
  // <html amp=""> support
  interface HtmlHTMLAttributes<T> extends React.HTMLAttributes<T> {
    amp?: string
  }

  // <link nonce=""> support
  interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
    nonce?: string
  }

  // <style jsx> and <style jsx global> support for styled-jsx
  interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
    jsx?: boolean
    global?: boolean
  }
}

/**
 * `Page` type, use it as a guide to create `pages`.
 */
export type NextPage<P = {}, IP = P> = NextComponentType<NextPageContext, IP, P>

/**
 * `Config` type, use it for export const config
 */
export type PageConfig = {
  amp?: boolean | 'hybrid'
  api?: {
    /**
     * The byte limit of the body. This is the number of bytes or any string
     * format supported by `bytes`, for example `1000`, `'500kb'` or `'3mb'`.
     */
    bodyParser?: { sizeLimit?: number | string } | false
  }
}

export {
  NextPageContext,
  NextComponentType,
  NextApiResponse,
  NextApiRequest,
  NextApiHandler,
}

export type GetStaticProps = (ctx: {
  params: ParsedUrlQuery | undefined
  preview?: boolean
  previewData?: any
}) => Promise<{
  props: { [key: string]: any }
  revalidate?: number | boolean
}>

export type GetStaticPaths = () => Promise<{
  paths: Array<string | { params: ParsedUrlQuery }>
  fallback: boolean
}>

export type GetServerSideProps = (context: {
  params: ParsedUrlQuery | undefined
  req: IncomingMessage
  res: ServerResponse
  query: ParsedUrlQuery
}) => Promise<{ [key: string]: any }>

export default next
