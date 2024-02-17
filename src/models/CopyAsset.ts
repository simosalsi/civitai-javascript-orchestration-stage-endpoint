/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Job } from './Job';
export type CopyAsset = (Job & {
    /**
     * The ID of the original job to copy
     */
    jobId?: string | null;
    /**
     * The name of the asset to copy
     */
    assetName?: string | null;
    /**
     * The destination URI to copy the asset to
     */
    destinationUri?: string | null;
});

