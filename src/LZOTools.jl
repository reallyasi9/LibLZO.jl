module LZOTools
using LZO_jll

export compress, unsafe_compress!
export decompress, unsafe_decompress!
export optimize!, unsafe_optimize!

export AbstractLZOAlgorithm, AbstractLZOLevelAlgorithm
export LZO1X_1, LZO1X, LZO
export LZO1X_1_11, LZO1X_1_12, LZO1X_1_15, LZO1X_999

"""
    AbstractLZOAlgorithm

An abstract type from which specific LZO compression and decompression algorithms inherit.
"""
abstract type AbstractLZOAlgorithm end

include("init.jl")
include("compress.jl")
include("decompress.jl")
include("optimize.jl")
include("lzo1x.jl")
include("lookup.jl")

end