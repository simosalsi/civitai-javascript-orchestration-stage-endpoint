/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Job } from './Job';
import type { TimeSpan } from './TimeSpan';
export type UploadBlob = (Job & {
    /**
     * Get or set the key of the blob to upload. If no key is specified then a new unique key will be generated
     */
    key?: string | null;
    /**
     * Get or set if existing blobs should be replaced
     */
    replace?: boolean;
    duration?: TimeSpan;
});

