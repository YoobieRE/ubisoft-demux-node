/* eslint-disable */
export const protobufPackage = 'google.protobuf';

export interface FileDescriptorSet {
  file: FileDescriptorProto[];
}

export interface FileDescriptorProto {
  name: string;
  package: string;
  dependency: string[];
  publicDependency: number[];
  weakDependency: number[];
  messageType: DescriptorProto[];
  enumType: EnumDescriptorProto[];
  service: ServiceDescriptorProto[];
  extension: FieldDescriptorProto[];
  options?: FileOptions;
  sourceCodeInfo?: SourceCodeInfo;
  syntax: string;
}

export interface DescriptorProto {
  name: string;
  field: FieldDescriptorProto[];
  extension: FieldDescriptorProto[];
  nestedType: DescriptorProto[];
  enumType: EnumDescriptorProto[];
  extensionRange: DescriptorProto_ExtensionRange[];
  oneofDecl: OneofDescriptorProto[];
  options?: MessageOptions;
  reservedRange: DescriptorProto_ReservedRange[];
  reservedName: string[];
}

export interface DescriptorProto_ExtensionRange {
  start: number;
  end: number;
  options?: ExtensionRangeOptions;
}

export interface DescriptorProto_ReservedRange {
  start: number;
  end: number;
}

export interface ExtensionRangeOptions {
  uninterpretedOption: UninterpretedOption[];
}

export interface FieldDescriptorProto {
  name: string;
  number: number;
  label: FieldDescriptorProto_Label;
  type: FieldDescriptorProto_Type;
  typeName: string;
  extendee: string;
  defaultValue: string;
  oneofIndex: number;
  jsonName: string;
  options?: FieldOptions;
  proto3Optional: boolean;
}

export enum FieldDescriptorProto_Label {
  LABEL_OPTIONAL = 1,
  LABEL_REQUIRED = 2,
  LABEL_REPEATED = 3,
  UNRECOGNIZED = -1,
}

export enum FieldDescriptorProto_Type {
  TYPE_DOUBLE = 1,
  TYPE_FLOAT = 2,
  TYPE_INT64 = 3,
  TYPE_UINT64 = 4,
  TYPE_INT32 = 5,
  TYPE_FIXED64 = 6,
  TYPE_FIXED32 = 7,
  TYPE_BOOL = 8,
  TYPE_STRING = 9,
  TYPE_GROUP = 10,
  TYPE_MESSAGE = 11,
  TYPE_BYTES = 12,
  TYPE_UINT32 = 13,
  TYPE_ENUM = 14,
  TYPE_SFIXED32 = 15,
  TYPE_SFIXED64 = 16,
  TYPE_SINT32 = 17,
  TYPE_SINT64 = 18,
  UNRECOGNIZED = -1,
}

export interface OneofDescriptorProto {
  name: string;
  options?: OneofOptions;
}

export interface EnumDescriptorProto {
  name: string;
  value: EnumValueDescriptorProto[];
  options?: EnumOptions;
  reservedRange: EnumDescriptorProto_EnumReservedRange[];
  reservedName: string[];
}

export interface EnumDescriptorProto_EnumReservedRange {
  start: number;
  end: number;
}

export interface EnumValueDescriptorProto {
  name: string;
  number: number;
  options?: EnumValueOptions;
}

export interface ServiceDescriptorProto {
  name: string;
  method: MethodDescriptorProto[];
  options?: ServiceOptions;
}

export interface MethodDescriptorProto {
  name: string;
  inputType: string;
  outputType: string;
  options?: MethodOptions;
  clientStreaming: boolean;
  serverStreaming: boolean;
}

export interface FileOptions {
  javaPackage: string;
  javaOuterClassname: string;
  javaMultipleFiles: boolean;
  /** @deprecated */
  javaGenerateEqualsAndHash: boolean;
  javaStringCheckUtf8: boolean;
  optimizeFor: FileOptions_OptimizeMode;
  goPackage: string;
  ccGenericServices: boolean;
  javaGenericServices: boolean;
  pyGenericServices: boolean;
  phpGenericServices: boolean;
  deprecated: boolean;
  ccEnableArenas: boolean;
  objcClassPrefix: string;
  csharpNamespace: string;
  swiftPrefix: string;
  phpClassPrefix: string;
  phpNamespace: string;
  phpMetadataNamespace: string;
  rubyPackage: string;
  uninterpretedOption: UninterpretedOption[];
}

export enum FileOptions_OptimizeMode {
  SPEED = 1,
  CODE_SIZE = 2,
  LITE_RUNTIME = 3,
  UNRECOGNIZED = -1,
}

export interface MessageOptions {
  messageSetWireFormat: boolean;
  noStandardDescriptorAccessor: boolean;
  deprecated: boolean;
  mapEntry: boolean;
  uninterpretedOption: UninterpretedOption[];
}

export interface FieldOptions {
  ctype: FieldOptions_CType;
  packed: boolean;
  jstype: FieldOptions_JSType;
  lazy: boolean;
  deprecated: boolean;
  weak: boolean;
  uninterpretedOption: UninterpretedOption[];
}

export enum FieldOptions_CType {
  STRING = 0,
  CORD = 1,
  STRING_PIECE = 2,
  UNRECOGNIZED = -1,
}

export enum FieldOptions_JSType {
  JS_NORMAL = 0,
  JS_STRING = 1,
  JS_NUMBER = 2,
  UNRECOGNIZED = -1,
}

export interface OneofOptions {
  uninterpretedOption: UninterpretedOption[];
}

export interface EnumOptions {
  allowAlias: boolean;
  deprecated: boolean;
  uninterpretedOption: UninterpretedOption[];
}

export interface EnumValueOptions {
  deprecated: boolean;
  uninterpretedOption: UninterpretedOption[];
}

export interface ServiceOptions {
  deprecated: boolean;
  uninterpretedOption: UninterpretedOption[];
}

export interface MethodOptions {
  deprecated: boolean;
  idempotencyLevel: MethodOptions_IdempotencyLevel;
  uninterpretedOption: UninterpretedOption[];
}

export enum MethodOptions_IdempotencyLevel {
  IDEMPOTENCY_UNKNOWN = 0,
  NO_SIDE_EFFECTS = 1,
  IDEMPOTENT = 2,
  UNRECOGNIZED = -1,
}

export interface UninterpretedOption {
  name: UninterpretedOption_NamePart[];
  identifierValue: string;
  positiveIntValue: number;
  negativeIntValue: number;
  doubleValue: number;
  stringValue: Buffer;
  aggregateValue: string;
}

export interface UninterpretedOption_NamePart {
  namePart: string;
  isExtension: boolean;
}

export interface SourceCodeInfo {
  location: SourceCodeInfo_Location[];
}

export interface SourceCodeInfo_Location {
  path: number[];
  span: number[];
  leadingComments: string;
  trailingComments: string;
  leadingDetachedComments: string[];
}

export interface GeneratedCodeInfo {
  annotation: GeneratedCodeInfo_Annotation[];
}

export interface GeneratedCodeInfo_Annotation {
  path: number[];
  sourceFile: string;
  begin: number;
  end: number;
}
