const _SYMBOL_LOOKUP = Dict{Symbol,Type{<:AbstractLZOAlgorithm}}(
    :LZO1X_1 => LZO1X_1,
    :LZO1X => LZO1X_1, # alias
    :LZO => LZO1X_1, # alias
    :LZO1X_1_11 => LZO1X_1_11,
    :LZO1X_1_12 => LZO1X_1_12,
    :LZO1X_1_15 => LZO1X_1_15,
    :LZO1X_999 => LZO1X_999,
    :LZO1 => LZO1,
    :LZO1_99 => LZO1_99,
    :LZO1A => LZO1A,
    :LZO1A_99 => LZO1A_99,
    :LZO1B => LZO1B,
    :LZO1B_99 => LZO1B_99,
    :LZO1C => LZO1C,
    :LZO1C_99 => LZO1C_99,
    :LZO1C_999 => LZO1C_999,
    :LZO1F_1 => LZO1F_1,
    :LZO1F => LZO1F_1, # alias
    :LZO1F_999 => LZO1F_999,
    :LZO1Y_1 => LZO1Y_1,
    :LZO1Y => LZO1Y_1, # alias
    :LZO1Y_999 => LZO1Y_999,
)