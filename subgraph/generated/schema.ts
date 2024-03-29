// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Proposal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Proposal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Proposal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Proposal", id.toString(), this);
  }

  static load(id: string): Proposal | null {
    return store.get("Proposal", id) as Proposal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get title(): string {
    let value = this.get("title");
    return value.toString();
  }

  set title(value: string) {
    this.set("title", Value.fromString(value));
  }

  get author(): string {
    let value = this.get("author");
    return value.toString();
  }

  set author(value: string) {
    this.set("author", Value.fromString(value));
  }

  get ipfsHash(): string {
    let value = this.get("ipfsHash");
    return value.toString();
  }

  set ipfsHash(value: string) {
    this.set("ipfsHash", Value.fromString(value));
  }

  get voteStartBlock(): BigInt {
    let value = this.get("voteStartBlock");
    return value.toBigInt();
  }

  set voteStartBlock(value: BigInt) {
    this.set("voteStartBlock", Value.fromBigInt(value));
  }

  get voteEndBlock(): BigInt {
    let value = this.get("voteEndBlock");
    return value.toBigInt();
  }

  set voteEndBlock(value: BigInt) {
    this.set("voteEndBlock", Value.fromBigInt(value));
  }

  get status(): string {
    let value = this.get("status");
    return value.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get votingPossible(): boolean {
    let value = this.get("votingPossible");
    return value.toBoolean();
  }

  set votingPossible(value: boolean) {
    this.set("votingPossible", Value.fromBoolean(value));
  }

  get hasPassed(): boolean {
    let value = this.get("hasPassed");
    return value.toBoolean();
  }

  set hasPassed(value: boolean) {
    this.set("hasPassed", Value.fromBoolean(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get votes(): Array<string | null> {
    let value = this.get("votes");
    return value.toStringArray();
  }

  set votes(value: Array<string | null>) {
    this.set("votes", Value.fromStringArray(value));
  }

  get numVotesYes(): i32 {
    let value = this.get("numVotesYes");
    return value.toI32();
  }

  set numVotesYes(value: i32) {
    this.set("numVotesYes", Value.fromI32(value));
  }

  get numVotesNo(): i32 {
    let value = this.get("numVotesNo");
    return value.toI32();
  }

  set numVotesNo(value: i32) {
    this.set("numVotesNo", Value.fromI32(value));
  }

  get numTokensYes(): BigDecimal {
    let value = this.get("numTokensYes");
    return value.toBigDecimal();
  }

  set numTokensYes(value: BigDecimal) {
    this.set("numTokensYes", Value.fromBigDecimal(value));
  }

  get numTokensNo(): BigDecimal {
    let value = this.get("numTokensNo");
    return value.toBigDecimal();
  }

  set numTokensNo(value: BigDecimal) {
    this.set("numTokensNo", Value.fromBigDecimal(value));
  }

  get proposalContent(): string {
    let value = this.get("proposalContent");
    return value.toString();
  }

  set proposalContent(value: string) {
    this.set("proposalContent", Value.fromString(value));
  }
}

export class ProposalContent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ProposalContent entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ProposalContent entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ProposalContent", id.toString(), this);
  }

  static load(id: string): ProposalContent | null {
    return store.get("ProposalContent", id) as ProposalContent | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get proposal(): Array<string | null> {
    let value = this.get("proposal");
    return value.toStringArray();
  }

  set proposal(value: Array<string | null>) {
    this.set("proposal", Value.fromStringArray(value));
  }

  get type(): string {
    let value = this.get("type");
    return value.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get title(): string {
    let value = this.get("title");
    return value.toString();
  }

  set title(value: string) {
    this.set("title", Value.fromString(value));
  }

  get summary(): string {
    let value = this.get("summary");
    return value.toString();
  }

  set summary(value: string) {
    this.set("summary", Value.fromString(value));
  }

  get details(): string {
    let value = this.get("details");
    return value.toString();
  }

  set details(value: string) {
    this.set("details", Value.fromString(value));
  }

  get link(): string {
    let value = this.get("link");
    return value.toString();
  }

  set link(value: string) {
    this.set("link", Value.fromString(value));
  }
}

export class Vote extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Vote entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Vote entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Vote", id.toString(), this);
  }

  static load(id: string): Vote | null {
    return store.get("Vote", id) as Vote | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get proposal(): string {
    let value = this.get("proposal");
    return value.toString();
  }

  set proposal(value: string) {
    this.set("proposal", Value.fromString(value));
  }

  get direction(): boolean {
    let value = this.get("direction");
    return value.toBoolean();
  }

  set direction(value: boolean) {
    this.set("direction", Value.fromBoolean(value));
  }

  get weight(): BigDecimal {
    let value = this.get("weight");
    return value.toBigDecimal();
  }

  set weight(value: BigDecimal) {
    this.set("weight", Value.fromBigDecimal(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get voter(): string {
    let value = this.get("voter");
    return value.toString();
  }

  set voter(value: string) {
    this.set("voter", Value.fromString(value));
  }
}

export class Voter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Voter entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Voter entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Voter", id.toString(), this);
  }

  static load(id: string): Voter | null {
    return store.get("Voter", id) as Voter | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get votes(): Array<string | null> {
    let value = this.get("votes");
    return value.toStringArray();
  }

  set votes(value: Array<string | null>) {
    this.set("votes", Value.fromStringArray(value));
  }
}
