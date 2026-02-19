// ===== 타입 =====

export type CreatorType = 'person' | 'solo' | 'corporate';

export type CreatorApiType = 'INDIVIDUAL' | 'BUSINESS' | 'CORPORATION';

export type CreatorDocType =
  | 'ID_CARD'
  | 'BANKBOOK'
  | 'BRC'
  | 'COMP_REGISTRY'
  | 'COMP_SEAL';

export interface DocumentFileConfig {
  content: string;
  condition: string;
  docType: CreatorDocType;
}

export interface DocumentConfig {
  title: string;
  files: DocumentFileConfig[];
}

// ===== 프론트 → API 매핑 =====

export const creatorTypeToApi: Record<CreatorType, CreatorApiType> = {
  person: 'INDIVIDUAL',
  solo: 'BUSINESS',
  corporate: 'CORPORATION',
};

// ===== 서류 설정 =====

export const creatorDocumentConfig: Record<CreatorType, DocumentConfig> = {
  person: {
    title: '개인 서류 제출',
    files: [
      { content: '신분증 사본', condition: '주민등록증, 운전면허증 등', docType: 'ID_CARD' },
      { content: '통장 사본', condition: '본인 명의 계좌', docType: 'BANKBOOK' },
    ],
  },

  solo: {
    title: '개인사업자 서류 제출',
    files: [
      { content: '사업자등록증 사본', condition: '최근 3개월 이내', docType: 'BRC' },
      { content: '대표자 신분증', condition: '사업자등록증 대표자와 일치', docType: 'ID_CARD' },
      { content: '통장 사본', condition: '사업자 명의', docType: 'BANKBOOK' },
    ],
  },

  corporate: {
    title: '법인사업자 서류 제출',
    files: [
      { content: '사업자등록증 사본', condition: '법인 사업자', docType: 'BRC' },
      { content: '법인 등기부등본', condition: '최근 3개월 이내', docType: 'COMP_REGISTRY' },
      { content: '법인 인감증명서', condition: '최근 3개월 이내', docType: 'COMP_SEAL' },
      { content: '통장 사본', condition: '법인 명의', docType: 'BANKBOOK' },
    ],
  },
};

// ===== API 응답 =====

export interface CreatorApplication {
  applicationId: number;
  creatorType: CreatorApiType;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
}

export interface CreatorSubmitResult {
  applicationId: number;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  submitted: boolean;
  required: CreatorDocType[];
  uploaded: CreatorDocType[];
  missing: CreatorDocType[];
}

export interface UploadDocResponse {
  docId: number;
  docType: CreatorDocType;
  attachmentId: number;
  fileUrl: string;
  originalFilename: string;
  extension: string;
}
